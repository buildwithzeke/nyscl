import "./invite.css";


const Invite = () => {


    //function to handle copy invitation code
    const copyInviteCode = () => {
        alert("copied!");
    }


    return (
        <section id="invite">

            <div class="invite_block">
                <h3 class="invite_label">Invite friends</h3>
                <div class="invite_box">
                    <input class="invite_code" type="text" value="Ezekiel8807" disabled />
                    <i onClick={ copyInviteCode } class="invite_copy">copy</i>
                </div>
            </div>

        </section>
    )
}

export default Invite;