import { useState, useEffect } from "react";
import axios from "axios";

function useDiscordOnlineUsers(url) {
	const [onlineDiscordMembers, setOnlineDiscordMembers] = useState(null);
	useEffect(() => {
		(async function () {
			try {
				const {
					data: { members },
				} = await axios({
					method: "GET",
					url: url,
				});
				const onlineMembers = members.filter(member => member.status === "online").length;
				setOnlineDiscordMembers(onlineMembers);
			} catch (e) {
				console.error(e);
			}
		})();
	}, [url]);

	return onlineDiscordMembers;
}

export default useDiscordOnlineUsers;
