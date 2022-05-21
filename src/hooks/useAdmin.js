import { useEffect, useState } from "react"

const useAdmin = (email) => {
    const [isAdmin, setIsAdmin] = useState(false);
    useEffect(() => {
        fetch(`http://localhost:5000/admin/${email}`, {
            method: "GET",
            headers: { authorization: `Bearer ${localStorage.getItem('accessToken')}` }
        })
            .then(res => res.json())
            .then(data => setIsAdmin(data.admin))
    }, [email])
    return [isAdmin];
}
export default useAdmin;