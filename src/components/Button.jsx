import React from 'react';
import PropTypes from 'prop-types';

const ButtonPrimary = ({
  href,
  target = '_self',
  label,
  icon,
  classes = ''
}) => {
  if (href) {
    return (
      <a href={href} target={target} className={"btn btn-primary" + classes}>
        {label}
        {icon ? 
          <span className="material-symbols-rounded" aria-hidden="true">
            {icon}
          </span>
        :undefined}
      </a>
    );
  } else {
    return (
      <button className={"btn btn-primary" + classes}>
        {label}
        {icon ?
          <span className="material-symbols-rounded " aria-hidden="true">
            {icon}
          </span>
         
        :undefined}
      </button>
    );
  }
};

// button Ountline part  start from here
const ButtonOutline = ({
  href,
  target = '_self',
  label,
  icon,
  classes = ''
}) => {
  if (href) {
    return (
      <a href={href} target={target} className={"btn btn-outline" + classes}>
        {label}
        {icon && (
          <span className="material-symbols-rounded" aria-hidden="true">
            {icon}
          </span>
        )}
      </a>
    );
  } else {
    return (
      <button className={"btn btn-outline" + classes}>
        {label}
        {icon && (
          <span className="material-symbols-rounded" aria-hidden="true">
            {icon}
          </span>
        )}
      </button>
    );
  }
}

ButtonPrimary.propTypes = {
  label: PropTypes.string.isRequired,
  href: PropTypes.string,
  target: PropTypes.string,
  icon: PropTypes.string, // icon is passed as string inside <span>, not a React element
  classes: PropTypes.string,
};
ButtonOutline.propTypes = {
  label: PropTypes.string.isRequired,
  href: PropTypes.string,
  target: PropTypes.string,
  icon: PropTypes.string, // icon is passed as string inside <span>, not a React element
  classes: PropTypes.string,
};

export { ButtonPrimary }
export { ButtonOutline };
