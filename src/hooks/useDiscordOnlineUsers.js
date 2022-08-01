import { useState, useEffect } from "react";
import axios from "axios";

function useDiscordOnlineUsers(url) {
	const [onlineDiscordMembers, setOnlineDiscordMembers] = useState(null);
	useEffect(async () => {
		try {
			const {
				data: { members },
			} = await axios({
				method: "GET",
				url: url,
			});
			console.log("response", members);
			const onlineMembers = members.filter(member => member.status === "online").length;
			setOnlineDiscordMembers(onlineMembers);
		} catch (e) {
			console.error(e);
		}
	}, []);

	return onlineDiscordMembers;
}

export default useDiscordOnlineUsers;
