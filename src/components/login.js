import{useNavigate} from "react-router-dom"
export default function Login(props){
    const navigate= useNavigate();
    async  function handleSubmit (event){
        event.preventDefault();
        let user={
            userName:event.target.username.value,
            password:event.target.password.value
        }
        console.log(user);
        let url="http://localhost:3200/login";
        let option={
            method: 'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(user)
        }
        let response= await fetch(url,option);
        let responseData = await response.json();
        if(responseData.flag===true){
            navigate('restaurant');
        }else{
            alert(responseData.msg)
        }
        

    }
    return(
        <div>
            <h1>
                Login Form
                <form onSubmit={handleSubmit}>
                    UserName:<input type ="text" name ="username" id="username"/><br/>
                    password: <input type ="password" name ="password" id="password"/><br/>
                    <input type ="submit" value="submit"/><br/>
                </form>
            </h1>
        </div>
    )
}
