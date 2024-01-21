// import textField from "../components/textField"

function loginPage (){
    return (
        <div>
            <form class="relative p-3 col-start-1 row-start-1 flex flex-col rounded-lg bg-gradient-to-t from-black/75 via-black/0 sm:bg-none sm:row-start-2 sm:p-0 lg:row-start-1" method="post" action="/profile">
                <input type="text" name="email" />
                <input type="password" name="password"/>
                <input type="submit" name="enviar"/>

            </form>
        </div>
    )
}

export default loginPage


     