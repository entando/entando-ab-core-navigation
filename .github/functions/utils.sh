function setBundleVersion() {
    local versionSuffix=$1
    version=$(ent bundle info | grep "Version:" | awk '{print $2}')
    ver="$version$versionSuffix"
    value=".version=\"$ver\""
    jq $value entando.json > temp.json && mv temp.json entando.json
}

function setBundleVersionTag() {
    local version=$1
    echo "VERSION: $version"
    value=".version=\"$version\""
    jq $value entando.json > temp.json && mv temp.json entando.json
}

function getBundleImage() {
    ent bundle images | grep bundle | awk '{printf "%s:%s", $1, $2}'
}

function setComponentVersions() {
    local versionSuffix=$1

    components=$(ent bundle list | tail -n +$((n + 3)))
    while IFS= read -r line
    do
        name=$(echo $line | awk '{print $1}')
        type=$(echo $line | awk '{print $2}')
        version=$(echo $line | awk '{print $3}')
        stack=$(echo $line | awk '{print $4}')

        # Enter component folder
        cd "$type"s/"$name"

        ver="$version$versionSuffix"
        echo "Setting version=$ver for component $name"

        if [ "$stack" = "spring-boot" ]; then
            mvn versions:set -DnewVersion="$ver" > /dev/null
        fi

        if [ "$stack" = "react" ] || [ "$stack" = "node" ]; then
            value=".version=\"$ver\""
            jq $value package.json > temp.json && mv temp.json package.json
        fi

        # Return back to bundle folder
        cd ../../

    done <<< "$components"
}

function setComponentVersionsTag() {
    local ver=$1

    components=$(ent bundle list | tail -n +$((n + 3)))
    while IFS= read -r line
    do
        name=$(echo $line | awk '{print $1}')
        type=$(echo $line | awk '{print $2}')
        version=$(echo $line | awk '{print $3}')
        stack=$(echo $line | awk '{print $4}')

        # Enter component folder
        cd "$type"s/"$name"

        echo "Setting version=$ver for component $name"

        if [ "$stack" = "spring-boot" ]; then
            mvn versions:set -DnewVersion="$ver" > /dev/null
        fi

        if [ "$stack" = "react" ] || [ "$stack" = "node" ]; then
            value=".version=\"$ver\""
            jq $value package.json > temp.json && mv temp.json package.json
        fi

        # Return back to bundle folder
        cd ../../

    done <<< "$components"
}

"$@"