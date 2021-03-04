$(document).ready(() => {
    const deleteUser = $("#delete-user");
    //deleting user from the db 
    const handleDeleteButtonPress = (e) => {
        fetch(`/api/users/me`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
            })
            .then(window.location.href = ("/logout"))
            .catch(err => {
                console.log("Ran into an error:" + err);
            });
    };
    deleteUser.on("click", e => {
        event.preventDefault();
        handleDeleteButtonPress(e);
    })
})