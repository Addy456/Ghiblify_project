import logo from './logo.png'
import logo_icon from './logo_icon.png'
import linkedin_icon from './linkedin_icon.png'
import instagram_icon from './instagram_icon.png'
import github_icon from './github_icon.png'
import star_icon from './star_icon.svg'
import rating_star from './rating_star.svg'
import sample_image_1 from './sample_image_1.png'
import sample_image_2 from './sample_image_2.png'
import image_1 from './image_1.png'
import image_2 from './image_2.png'
import image_3 from './image_3.png'
import image_4 from './image_4.png'
import image_5 from './image_5.png'
import image_6 from './image_6.png'
import profile_img_1 from './profile_img_1.png'
import profile_img_2 from './profile_img_2.png'
import profile_img_3 from './profile_img_3.jpg'
import step_icon_1 from './step_icon_1.svg'
import step_icon_2 from './step_icon_2.svg'
import step_icon_3 from './step_icon_3.svg'
import user_icon from './user_icon.svg'
import email_icon from './email_icon.svg'
import lock_icon from './lock_icon.svg'
import cross_icon from './cross_icon.svg'
import star_group from './star_group.png'
import credit_star from './credit_star.svg'
import profile_icon from './profile_icon.png'

export const assets = {
    logo,
    logo_icon,
    linkedin_icon,
    instagram_icon,
    github_icon,
    star_icon,
    rating_star,
    sample_image_1,
    sample_image_2,
    image_1,
    image_2,
    image_3,
    image_4,
    image_5,
    image_6,
    user_icon,
    email_icon,
    lock_icon,
    cross_icon,
    star_group,
    credit_star,
    profile_icon
}

export const stepsData = [
    {
      title: 'Describe Your Vision',
      description: 'Type a phrase, sentence, or paragraph that describes the image you want to create.',
      icon: step_icon_1,
    },
    {
      title: 'Watch the Magic',
      description: 'Our AI-powered engine will transform your text into a high-quality, unique image in seconds.',
      icon: step_icon_2,
    },
    {
      title: 'Download & Share',
      description: 'Instantly download your creation or share it with the world directly from our platform.',
      icon: step_icon_3,
    },
  ];

export const testimonialsData = [
  {
    image: profile_img_1,
    name: 'Abhishek Verma',
    role: 'Graphic Designer',
    stars: 5,
    text: `Ghiblify has honestly changed the way I create visuals. I just write what I imagine, and it turns into a beautiful Ghibli-style image — no complicated steps. It's perfect for adding a magical touch to my design work!`
},
{
    image: profile_img_2,
    name: 'Riya Sharma',
    role: 'Content Creator',
    stars: 4,
    text: `For someone like me who's always posting on Instagram and YouTube, Ghiblify is a blessing! I don't need to search for illustrations anymore — I just describe my idea, and the AI brings it to life in seconds.`
},
{
    image: profile_img_3,
    name: 'Kunal Mehta',
    role: 'Student & Anime Fan',
    stars: 4,
    text: `As a huge Studio Ghibli fan, Ghiblify feels like a dream come true! I've created characters, scenes, even moodboards just by typing my thoughts. It's fun, super easy, and feels like magic every time.`
},
]

export const plans = [
    {
      id: 'Basic',
      price: 10,
      credits: 100,
      desc: 'Best for personal use.'
    },
    {
      id: 'Advanced',
      price: 50,
      credits: 500,
      desc: 'Best for business use.'
    },
    {
      id: 'Business',
      price: 250,
      credits: 5000,
      desc: 'Best for enterprise use.'
    },
  ]