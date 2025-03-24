import { Link } from "react-router-dom"
export default function NotFoundPage (){
    return (
        <div>
            <p> The page you are looking for does not exist. 
                <Link to ="/"> Home</Link>
            </p>
        </div>
    );
}