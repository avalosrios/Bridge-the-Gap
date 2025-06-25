import '../styles/GroupCard.css'

export default function GroupCard({ group }) {
    return (
        <div>
            <h2>{group.title}</h2>
            <div className='group-info'>
                <img src="default_group_pic" alt="Group Image" />
                <div className='member-lsit'>
                    <p>Member List:</p>
                </div>
            </div>
        </div>
    );
}