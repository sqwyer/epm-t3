import { useSession } from "next-auth/react";

const App: React.FC = () => {
	const { data: session, status } = useSession();

	return (
		<div>
			<p>{session ? "Hello, " + session.user?.name : "Loading..."}</p>
		</div>
	);
};

export default App;
