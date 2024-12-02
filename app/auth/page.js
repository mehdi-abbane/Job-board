"use client"
import { useState } from "react"

export default function Auth() {
    const [userType, setUserType] = useState(null);
    return <div className="h-screen w-screen grid place-content-center">

        {
            userType == null &&
            (<div className="flex flex-col gap-3">
                <button className="btn" onClick={() => setUserType("company")}>Company</button>
                <button className="btn btn-primary" onClick={() => setUserType("employer")}>Employer</button>

            </div>
            )
        }
        {
            userType == "compnay" && <div>
                company
                </div>
        }
        {
            userType == "employer" && <div>
                <input />
            </div>
        }
        <p></p>
    </div>
}
