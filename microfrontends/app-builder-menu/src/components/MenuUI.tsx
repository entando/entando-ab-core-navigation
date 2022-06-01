import styled from 'styled-components';
import ListGroup from './ListGroup';
import ListGroupItem from './ListGroup/ListGroupItem';
import PagesIcon from './Icons/PagesIcon';
import DashboardIcon from './Icons/DashboardIcon';
import ComponentsIcon from './Icons/ComponentsIcon';
import ContentIcon from './Icons/ContentIcon';
import UsersIcon from './Icons/UsersIcon';
import RepositoryIcon from './Icons/RepositoryIcon';
import PBCsIcon from './Icons/PBCsIcon';
import AdministrationIcon from './Icons/AdministrationIcon';

const MenuCmp = styled.menu`
  height: 100%;
  background: #292e34;
  border-right: 1px solid #292e34;
  bottom: 0;
  left: 0;
  overflow-x: hidden;
  overflow-y: auto;
  position: fixed;
  top: 60px;
  width: 200px;
  z-index: 1030;
`;

interface Props {}

export default function MenuUI(props: Props): JSX.Element {
  return (
    <MenuCmp>
      <ListGroup>
        <ListGroupItem
          label="Dashboard"
          renderIcon={props => <DashboardIcon {...props} />}
          isActive={false}
          hasChildren={false}
        />
        <ListGroupItem
          label="Pages"
          renderIcon={props => <PagesIcon {...props} />}
          isActive={false}
          hasChildren
        />
        <ListGroupItem
          label="Components"
          renderIcon={props => <ComponentsIcon {...props} />}
          isActive={false}
          hasChildren
        />
        <ListGroupItem
          label="Content"
          renderIcon={props => <ContentIcon {...props} />}
          isActive={false}
          hasChildren
        />
        <ListGroupItem
          label="Users"
          renderIcon={props => <UsersIcon {...props} />}
          isActive={false}
          hasChildren
        />
        <ListGroupItem
          label="Repository"
          isActive={false}
          renderIcon={props => <RepositoryIcon {...props} />}
          hasChildren={false}
        />
        <ListGroupItem
          label="PBC's"
          renderIcon={props => <PBCsIcon {...props} />}
          isActive={false}
          hasChildren
        />
        <ListGroupItem
          label="Administration"
          renderIcon={props => <AdministrationIcon {...props} />}
          isActive
          hasChildren
          fixBottom
        />
      </ListGroup>
    </MenuCmp>
  );
}
