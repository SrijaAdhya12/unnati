export const events = [
    {
        title: 'Web Development Workshop',
        description: 'A workshop to learn the basics of web development.',
        date: new Date('2024-04-15'),
        time: '10:00 AM',
        entryFee: 0,
        location: 'Mumbai, India',
        organizer: mongoose.Types.ObjectId(), // Example organizer ID
        type: 'workshop',
    },
    {
        title: 'Hackathon 2024',
        description: 'An annual hackathon for tech enthusiasts.',
        date: new Date('2024-05-20'),
        time: '9:00 AM',
        entryFee: 10,
        location: 'Bangalore, India',
        organizer: mongoose.Types.ObjectId(), // Example organizer ID
        type: 'hackathon',
    },
    {
        title: 'Tech Meetup',
        description: 'A meetup to discuss recent trends in technology.',
        date: new Date('2024-06-10'),
        time: '6:00 PM',
        entryFee: 0,
        location: 'Delhi, India',
        organizer: mongoose.Types.ObjectId(), // Example organizer ID
        type: 'meetup',
    }]