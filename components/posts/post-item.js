import Image from 'next/image';
import classes from './post-item.module.css';
import Link from 'next/link';

export default function PostItem(props) {
    const {title, image, excerpt, date, slug} = props.post;

    const formattedDate = new Date(date).toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    });

    const imagePath = `/images/posts/${slug}/${image}`;
    const linkPath = `/posts/${slug}`;

    return <li className={classes.post}>
        <Link href={linkPath} legacyBehavior>
            <a>
                <div className={classes.image}>
                    <Image src={imagePath} alt={title} height={200} width={300} layout='responsive' />
                </div>
                <div className={classes.content}>
                    <h3>{title}</h3>
                    <time>{formattedDate}</time>
                    <p>{excerpt}</p>
                </div>
            </a>
        </Link>
    </li>
}