import "bootstrap/dist/css/bootstrap.css";

export default function LoginPage() {
  return (
        <div>
             <h1 className="text-5xl font-bold underline">
                Hello world!
            </h1>
            <form method="post" action="auth.php">
                <input className="text-blue-600" type="text" name="login" placeholder="login"/>
                <br/>
                <input type="password" name="password" placeholder="hasło"/>
                <br/>
                <input type="submit"/>
            </form>
        </div>
  );
}