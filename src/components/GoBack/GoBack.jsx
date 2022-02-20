import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

import { GoBackBtn } from './GoBack.styled';

export default function GoBack({ to, children }) {
  const navigate = useNavigate();

  return <GoBackBtn onClick={() => navigate(to)}>{children}</GoBackBtn>;
}

GoBack.propTypes = {
  to: PropTypes.object.isRequired,
  children: PropTypes.string.isRequired,
};
