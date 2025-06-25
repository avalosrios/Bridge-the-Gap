import '../styles/GroupCard.css'

export default function GroupCard({ group }) {
    return (
        <div className='group-card'>
            <h2>{group.title}</h2>
            <div className='group-info'>
                <img src={group.img} alt="Group Image" className='group-img'/>
                <div className='member-list'>
                    <p>Member List:</p>
                </div>
            </div>
        </div>
    );
}