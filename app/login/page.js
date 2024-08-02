export default function Login() {
    return (
        <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
            <div className="card shadow p-4" style={{ width: '25rem', borderRadius: '15px' }}>
                <div className="card-body">
                    <h3 className="card-title text-center mb-4">Login</h3>
                    <form>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email address</label>
                            <input type="email" className="form-control" id="email" placeholder="Enter your email" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Password</label>
                            <input type="password" className="form-control" id="password" placeholder="Enter your password" />
                        </div>
                        <div className="d-grid">
                            <button type="submit" className="btn btn-primary btn-lg">Login</button>
                        </div>
                        <div className="text-center mt-3">
                            <a href="#" className="text-decoration-none">Forgot password?</a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}