import {useEffect, useState} from "react";

export default function Ratings() {
    const [ratings, setRatings] = useState([])

    useEffect(() => {
        console.log("Im running")

        async function loadFeedback() {
            console.log("Im running1")
            try {
                const res = await fetch("http://localhost:3000/api/feedback");
                if (!res.ok) {
                    console.error("Request failed:", res.status);
                    return;
                }
                const data = await res.json();
                setRatings(data);
            } catch (err) {
                console.log(err)
            }
        }

        loadFeedback().then(r => {
            return r
        })
    }, []);

    return (
        <>
            {ratings.map((item) => (
                <div key={item.id} className="card">
                    <h4>{item.name}</h4>
                    <p>{item.message}</p>
                    <small>{item.created_at}</small>
                </div>
            ))}
        </>
    )
}