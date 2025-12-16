export const doctors = [
  {
    id: 1,
    name: 'Dr. Sarah Safari',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=100&h=100&fit=crop'
  },
  {
    id: 2,
    name: 'Dr. Ava Williams',
    image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=100&h=100&fit=crop'
  },
  {
    id: 3,
    name: 'Dr. Adam Smith',
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=100&h=100&fit=crop'
  },
  {
    id: 4,
    name: 'Dr. Alex Ramirez',
    image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=100&h=100&fit=crop'
  },
  {
    id: 5,
    name: 'Dr. Michael May',
    image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=100&h=100&fit=crop'
  },
  {
    id: 6,
    name: 'Dr. Jasmine Lee',
    image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=100&h=100&fit=crop'
  },
  {
    id: 7,
    name: 'Dr. Hardik Sharma',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop'
  },
  {
    id: 8,
    name: 'Dr. Alyana Cruz',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&h=100&fit=crop'
  }
]

export const initialAppointments = [
  { id: 1, patient: 'Phoenix Baker', date: 'Jan 4, 2022', status: 'scheduled', doctor: { id: 4, name: 'Dr. Alex Ramirez', image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=100&h=100&fit=crop' }, reason: 'Annual check-up' },
  { id: 2, patient: 'Candice Wu', date: 'Jan 2, 2022', status: 'pending', doctor: { id: 5, name: 'Dr. Michael May', image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=100&h=100&fit=crop' }, reason: 'Follow-up consultation' },
  { id: 3, patient: 'Lana Steiner', date: 'Jan 4, 2022', status: 'cancelled', doctor: { id: 6, name: 'Dr. Jasmine Lee', image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=100&h=100&fit=crop' }, reason: 'Flu symptoms' },
  { id: 4, patient: 'Drew Cano', date: 'Jan 8, 2022', status: 'scheduled', doctor: { id: 7, name: 'Dr. Hardik Sharma', image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop' }, reason: 'Blood test results' },
  { id: 5, patient: 'Natali Craig', date: 'Jan 6, 2022', status: 'pending', doctor: { id: 8, name: 'Dr. Alyana Cruz', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&h=100&fit=crop' }, reason: 'Routine examination' },
  { id: 6, patient: 'Orlando Diggs', date: 'Jan 10, 2022', status: 'scheduled', doctor: { id: 9, name: 'Dr. Sarah Jenkins', image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=100&h=100&fit=crop' }, reason: 'Skin allergy' },
  { id: 7, patient: 'Andi Lane', date: 'Jan 12, 2022', status: 'pending', doctor: { id: 4, name: 'Dr. Alex Ramirez', image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=100&h=100&fit=crop' }, reason: 'Post-surgery review' },
  { id: 8, patient: 'Kate Morrison', date: 'Jan 14, 2022', status: 'scheduled', doctor: { id: 10, name: 'Dr. James Wilson', image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=100&h=100&fit=crop' }, reason: 'Chronic back pain' },
  { id: 9, patient: 'Demi Wilkinson', date: 'Jan 15, 2022', status: 'cancelled', doctor: { id: 5, name: 'Dr. Michael May', image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=100&h=100&fit=crop' }, reason: 'Vaccination' },
  { id: 10, patient: 'Koray Okumus', date: 'Jan 18, 2022', status: 'scheduled', doctor: { id: 11, name: 'Dr. Elena Rossi', image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=100&h=100&fit=crop' }, reason: 'Migraine specialist' },
  { id: 11, patient: 'Ava Gupta', date: 'Jan 19, 2022', status: 'scheduled', doctor: { id: 4, name: 'Dr. Alex Ramirez', image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=100&h=100&fit=crop' }, reason: 'Heart palpitations' },
  { id: 12, patient: 'Zahir Mays', date: 'Jan 20, 2022', status: 'pending', doctor: { id: 6, name: 'Dr. Jasmine Lee', image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=100&h=100&fit=crop' }, reason: 'Knee injury' },
  { id: 13, patient: 'Lori Bryson', date: 'Jan 21, 2022', status: 'scheduled', doctor: { id: 8, name: 'Dr. Alyana Cruz', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&h=100&fit=crop' }, reason: 'Thyroid check' },
  { id: 14, patient: 'Amir Hendrix', date: 'Jan 22, 2022', status: 'cancelled', doctor: { id: 7, name: 'Dr. Hardik Sharma', image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop' }, reason: 'Chest pain' },
  { id: 15, patient: 'Sienna Hewitt', date: 'Jan 22, 2022', status: 'scheduled', doctor: { id: 9, name: 'Dr. Sarah Jenkins', image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=100&h=100&fit=crop' }, reason: 'Nutrition planning' },
  { id: 16, patient: 'Elias Burke', date: 'Jan 23, 2022', status: 'pending', doctor: { id: 10, name: 'Dr. James Wilson', image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=100&h=100&fit=crop' }, reason: 'Diabetes follow-up' },
  { id: 17, patient: 'Macy Guzman', date: 'Jan 24, 2022', status: 'scheduled', doctor: { id: 5, name: 'Dr. Michael May', image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=100&h=100&fit=crop' }, reason: 'Eye strain' },
  { id: 18, patient: 'Jenson Vargas', date: 'Jan 25, 2022', status: 'scheduled', doctor: { id: 11, name: 'Dr. Elena Rossi', image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=100&h=100&fit=crop' }, reason: 'Insomnia' },
  { id: 19, patient: 'Hollie Smith', date: 'Jan 25, 2022', status: 'pending', doctor: { id: 4, name: 'Dr. Alex Ramirez', image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=100&h=100&fit=crop' }, reason: 'Fatigue' },
  { id: 20, patient: 'Kian Mckinney', date: 'Jan 26, 2022', status: 'cancelled', doctor: { id: 6, name: 'Dr. Jasmine Lee', image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=100&h=100&fit=crop' }, reason: 'Sinus infection' },
  { id: 21, patient: 'Aria Grant', date: 'Jan 27, 2022', status: 'scheduled', doctor: { id: 7, name: 'Dr. Hardik Sharma', image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop' }, reason: 'Ear ache' },
  { id: 22, patient: 'Lola George', date: 'Jan 28, 2022', status: 'pending', doctor: { id: 8, name: 'Dr. Alyana Cruz', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&h=100&fit=crop' }, reason: 'Prescription refill' },
  { id: 23, patient: 'Rocco Wright', date: 'Jan 29, 2022', status: 'scheduled', doctor: { id: 9, name: 'Dr. Sarah Jenkins', image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=100&h=100&fit=crop' }, reason: 'Allergy testing' },
  { id: 24, patient: 'Maya Wells', date: 'Jan 30, 2022', status: 'scheduled', doctor: { id: 10, name: 'Dr. James Wilson', image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=100&h=100&fit=crop' }, reason: 'Blood pressure' },
  { id: 25, patient: 'Reuben Reed', date: 'Jan 31, 2022', status: 'pending', doctor: { id: 5, name: 'Dr. Michael May', image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=100&h=100&fit=crop' }, reason: 'Stomach pain' },
  { id: 26, patient: 'Lexi Brooks', date: 'Feb 1, 2022', status: 'scheduled', doctor: { id: 11, name: 'Dr. Elena Rossi', image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=100&h=100&fit=crop' }, reason: 'Dermatology' },
  { id: 27, patient: 'Finnian Clay', date: 'Feb 2, 2022', status: 'cancelled', doctor: { id: 4, name: 'Dr. Alex Ramirez', image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=100&h=100&fit=crop' }, reason: 'Ankle sprain' },
  { id: 28, patient: 'Serenity Low', date: 'Feb 3, 2022', status: 'scheduled', doctor: { id: 6, name: 'Dr. Jasmine Lee', image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=100&h=100&fit=crop' }, reason: 'Post-partum check' },
  { id: 29, patient: 'Xavier Cole', date: 'Feb 4, 2022', status: 'pending', doctor: { id: 7, name: 'Dr. Hardik Sharma', image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop' }, reason: 'High cholesterol' },
  { id: 30, patient: 'Nora Quinn', date: 'Feb 5, 2022', status: 'scheduled', doctor: { id: 8, name: 'Dr. Alyana Cruz', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&h=100&fit=crop' }, reason: 'Fever' },
  { id: 31, patient: 'Arthur Bell', date: 'Feb 6, 2022', status: 'scheduled', doctor: { id: 9, name: 'Dr. Sarah Jenkins', image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=100&h=100&fit=crop' }, reason: 'Weight loss advice' },
  { id: 32, patient: 'Elsa Frost', date: 'Feb 7, 2022', status: 'pending', doctor: { id: 10, name: 'Dr. James Wilson', image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=100&h=100&fit=crop' }, reason: 'Wrist pain' },
  { id: 33, patient: 'Caleb Nash', date: 'Feb 8, 2022', status: 'cancelled', doctor: { id: 5, name: 'Dr. Michael May', image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=100&h=100&fit=crop' }, reason: 'Back surgery follow-up' },
  { id: 34, patient: 'Dina Shore', date: 'Feb 9, 2022', status: 'scheduled', doctor: { id: 11, name: 'Dr. Elena Rossi', image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=100&h=100&fit=crop' }, reason: 'Sore throat' },
  { id: 35, patient: 'Felix Fox', date: 'Feb 10, 2022', status: 'pending', doctor: { id: 4, name: 'Dr. Alex Ramirez', image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=100&h=100&fit=crop' }, reason: 'X-ray results' },
  { id: 36, patient: 'Grace Ho', date: 'Feb 11, 2022', status: 'scheduled', doctor: { id: 6, name: 'Dr. Jasmine Lee', image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=100&h=100&fit=crop' }, reason: 'Pregnancy test' },
  { id: 37, patient: 'Hugo Boss', date: 'Feb 12, 2022', status: 'scheduled', doctor: { id: 7, name: 'Dr. Hardik Sharma', image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop' }, reason: 'Migraine follow-up' },
  { id: 38, patient: 'Ivy League', date: 'Feb 13, 2022', status: 'pending', doctor: { id: 8, name: 'Dr. Alyana Cruz', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&h=100&fit=crop' }, reason: 'Skin check-up' },
  { id: 39, patient: 'Jack Pott', date: 'Feb 14, 2022', status: 'cancelled', doctor: { id: 9, name: 'Dr. Sarah Jenkins', image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=100&h=100&fit=crop' }, reason: 'Lab work' },
  { id: 40, patient: 'Kelly Green', date: 'Feb 15, 2022', status: 'scheduled', doctor: { id: 10, name: 'Dr. James Wilson', image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=100&h=100&fit=crop' }, reason: 'Physical therapy' },
  { id: 41, patient: 'Liam Neeson', date: 'Feb 16, 2022', status: 'pending', doctor: { id: 5, name: 'Dr. Michael May', image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=100&h=100&fit=crop' }, reason: 'Neck pain' },
  { id: 42, patient: 'Molly Bloom', date: 'Feb 17, 2022', status: 'scheduled', doctor: { id: 11, name: 'Dr. Elena Rossi', image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=100&h=100&fit=crop' }, reason: 'Stress management' },
  { id: 43, patient: 'Noah Ark', date: 'Feb 18, 2022', status: 'scheduled', doctor: { id: 4, name: 'Dr. Alex Ramirez', image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=100&h=100&fit=crop' }, reason: 'Cough' },
  { id: 44, patient: 'Olivia Wild', date: 'Feb 19, 2022', status: 'pending', doctor: { id: 6, name: 'Dr. Jasmine Lee', image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=100&h=100&fit=crop' }, reason: 'Consultation' },
  { id: 45, patient: 'Pete Moss', date: 'Feb 20, 2022', status: 'cancelled', doctor: { id: 7, name: 'Dr. Hardik Sharma', image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop' }, reason: 'Shoulder pain' },
  { id: 46, patient: 'Quinn Fabray', date: 'Feb 21, 2022', status: 'scheduled', doctor: { id: 8, name: 'Dr. Alyana Cruz', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&h=100&fit=crop' }, reason: 'Iron deficiency' },
  { id: 47, patient: 'Riley Reid', date: 'Feb 22, 2022', status: 'pending', doctor: { id: 9, name: 'Dr. Sarah Jenkins', image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=100&h=100&fit=crop' }, reason: 'Vision test' },
  { id: 48, patient: 'Sam Sung', date: 'Feb 23, 2022', status: 'scheduled', doctor: { id: 10, name: 'Dr. James Wilson', image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=100&h=100&fit=crop' }, reason: 'Broken toe' },
  { id: 49, patient: 'Tara Reed', date: 'Feb 24, 2022', status: 'scheduled', doctor: { id: 5, name: 'Dr. Michael May', image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=100&h=100&fit=crop' }, reason: 'Health certificate' },
  { id: 50, patient: 'Uma Thurman', date: 'Feb 25, 2022', status: 'pending', doctor: { id: 11, name: 'Dr. Elena Rossi', image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=100&h=100&fit=crop' }, reason: 'General check-up' }
];