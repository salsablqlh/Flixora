import "./Profile.css";

function Profile() {
    const user =
      JSON.parse(
        localStorage.getItem("currentUser")
      );

    const favorites =
      JSON.parse(
        localStorage.getItem("favorites")
      ) || [];

    return (
        <div className="profile-page">
            <div className="profile-card">
                <div className="profile-avatar">
                   👩‍💻 
                </div>

                <h2 className="profile-name">
                    {user?.username}
                </h2>

                <p className="profile-email">
                    {user?.email}
                </p>

                <div className="profile-stat">
                     ❤️ Favorite Movies:
                     {" "}
                     {favorites.length}  
                </div>
            </div>
        </div>
    );
}

export default Profile;