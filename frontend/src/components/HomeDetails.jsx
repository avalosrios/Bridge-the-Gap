import '../styles/HomeDetails.css'
import Reminder from './Reminder';

const reminders =[
    {
        group:"Family",
        message:"Call Mom at 5pm",
    },
    {
        group:"College Friends",
        message:"Haven't messaged in gorup for 3 days",
    },
    {
        group:"Family",
        message:"New post from Addy!",
    },
    {
        group:"Lapeer Friends",
        message:"New event added to group calander, opt in?",
    },
    {
        group:"Family",
        message:"Call Mom at 5pm",
    },
    {
        group:"College Friends",
        message:"Haven't messaged in gorup for 3 days",
    },
    {
        group:"Family",
        message:"New post from Addy!",
    },
    {
        group:"Lapeer Friends",
        message:"New event added to group calander, opt in?",
    },
    {
        group:"Family",
        message:"Call Mom at 5pm",
    },
    {
        group:"College Friends",
        message:"Haven't messaged in gorup for 3 days",
    },
    {
        group:"Family",
        message:"New post from Addy!",
    },
    {
        group:"Lapeer Friends",
        message:"New event added to group calander, opt in?",
    },
    {
        group:"Family",
        message:"Call Mom at 5pm",
    },
    {
        group:"College Friends",
        message:"Haven't messaged in gorup for 3 days",
    },
    {
        group:"Family",
        message:"New post from Addy!",
    },
    {
        group:"Lapeer Friends",
        message:"New event added to group calander, opt in?",
    },
]


export default function HomeDetails() {
    return (
        <div className='home-details'>
            <h2>Welcome Back</h2>
            <h3>Reminders:</h3>
            <div className='reminders-list'>
                {
                    reminders.map(reminder => {
                        return <Reminder reminder={reminder} />
                    })
                }
            </div>
        </div>
    );
}