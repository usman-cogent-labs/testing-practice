export default function Application(){
    return <form action="">
        <h1>Test Application</h1>
        <h2>User form</h2>
        <p>All fields are mandatory</p>
        <div data-testid="custom-html-element">Custom HTML Element</div>
        <div>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" placeholder="Full name" value={"usman"} onChange={() => {}}/>
        </div>
        <div>
            <label htmlFor="job-application">Job Application</label>
            <select id="job-location">
                <option value="">Select a country</option>
                <option value="pk">Pakistan</option>
                <option value="ind">India</option>
                <option value="aus">Australia</option>
                <option value="eng">England</option>
            </select>
        </div>
        <div>
            <label>
                <input type="checkbox" id="terms"/> I agree to terms and conditions
            </label>
        </div>
        <div>
            <button type="submit">Submit</button>
        </div>
    </form>
}