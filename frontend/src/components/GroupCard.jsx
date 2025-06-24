import '../styles/GroupCard.css'

export default function GroupCard() {
    return (
        <div>
            <h2>Group Title</h2>
            <div className='group-info'>
                <img src="default_group_pic" alt="Group Image" />
                <div className='member-lsit'>
                    <p>Member List:</p>
                </div>
            </div>
        </div>
    );
}