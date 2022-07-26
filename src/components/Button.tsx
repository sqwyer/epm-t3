import styles from "../styles/button.module.scss";

export default function Button({ children, type, action }: any) {
	let className = `${styles.Button}`;

	if (type) {
		if (type == "primary") className += ` ${styles.Primary}`;
	}

	return (
		<a className={className} onClick={action ? action : undefined}>
			{children}
		</a>
	);
}
