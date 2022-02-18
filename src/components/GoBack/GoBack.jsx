import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

import { GoBackBtn } from './GoBack.styled';

export default function GoBack({ to }) {
  const navigate = useNavigate();

  return <GoBackBtn onClick={() => navigate(to)}>Go back</GoBackBtn>;
}

GoBack.propTypes = {
  to: PropTypes.object.isRequired,
};
