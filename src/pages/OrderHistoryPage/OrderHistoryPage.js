//import everything from user-service
// import * from '../../utilities/users-service'
//OR
import { checkToken } from "../../utilities/users-service";

export default function OrderHistoryPage() {
  const handleCheckToken = async () => {
    const expData = await checkToken();
    alert(expData);
  };
  
  return (
    <div>
      <h1>Order History Page</h1>
      <button onClick={handleCheckToken}>Check When My Login Expires</button>
    </div>
  );
}
