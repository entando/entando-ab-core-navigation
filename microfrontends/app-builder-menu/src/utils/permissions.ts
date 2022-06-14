export const SUPERUSER_PERMISSION = 'superuser';
export const ADMINISTRATION_AREA_PERMISSION = 'enterBackend';
export const MANAGE_PAGES_PERMISSION = 'managePages';
export const CRUD_USERS_PERMISSION = 'editUsers';
export const VIEW_USERS_AND_PROFILES_PERMISSION = 'viewUsers';
export const EDIT_USER_PROFILES_PERMISSION = 'editUserProfile';
export const MANAGE_CATEGORIES_PERMISSION = 'manageCategories';
export const CRUD_CONTENTS_PERMISSION = 'editContents';
export const VALIDATE_CONTENTS_PERMISSION = 'validateContents';
export const MANAGE_RESOURCES_PERMISSION = 'manageResources';
export const ENTER_ECR_PERMISSION = 'enterECR';

export const hasAccess = (
  requiredPermissions: string | string[],
  userPermissions: string[]
) => {
  userPermissions = userPermissions || [];
  if (!requiredPermissions) {
    return false;
  }

  if (Array.isArray(requiredPermissions)) {
    return requiredPermissions.some(singlePermission =>
      userPermissions.includes(singlePermission)
    );
  }
  return userPermissions.includes(requiredPermissions);
};
