import { useContext } from 'react';
import ClickAwayListener from 'react-click-away-listener';
import AppLevelContext from '../context/AppLevelContext'

const Navigation = ({ setIsOpen }) => {
  const { menuList } = useContext(AppLevelContext)

  const handleClickAway = () => {
    setIsOpen(false);
  };

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <ul className="navigation-list">
        {menuList.map((menu) => (
          <li className="navigation-item" key={menu.id}>
            <a
              href={`#${menu.name}`}
              onClick={() => {
                setIsOpen(false);
              }}
            >
              {menu.name}
            </a>
          </li>
        ))}
      </ul>
    </ClickAwayListener>
  );
};

export default Navigation;
