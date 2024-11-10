import PropTypes from 'prop-types'

const UserCard = ({ userData }) => {
    return (
        <div className="text-lg p-5 rounded-2xl space-y-2 mt-3 border max-w-fit mx-auto">
            <div className='my-2 max-h-40'>
                <img className='mx-auto outline outline-2 outline-offset-4 outline-green-400 rounded-full max-w-40' src={userData?.photoURL} alt="User Profile Photo" />
            </div>
            <h2>{userData?.displayName}</h2>
            <p>{userData.email}</p>

        </div>
    )
}

UserCard.propTypes = {
    userData: PropTypes.object,
}

export default UserCard
