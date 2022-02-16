import { useNavigate } from 'react-router-dom';

export function GoBackBtn() {
  const navigate = useNavigate();

  return <button onClick={() => navigate(-1)}>Go back</button>;
}
