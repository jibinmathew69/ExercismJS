let tickets = {}

export function createVisitor(name, age, ticketId) {
	tickets[ticketId] = name;
	return {
		name: name,
		age: age,
		ticketId: ticketId
	}
}

export function revokeTicket(visitor) {
	if(visitor.ticketId === null){
		return visitor;
	}
	delete tickets[visitor['ticketId']];
	visitor["ticketId"] = null;
	return visitor;
}

export function ticketStatus(tickets, ticketId) {
	if (tickets[ticketId] === undefined){
		return "unknown ticket id";
	}else if(tickets[ticketId] === null){
		return "not sold";
	}else{
		return `sold to ${tickets[ticketId]}`
	}
}

export function simpleTicketStatus(tickets, ticketId) {
	status = ticketStatus(tickets, ticketId);
	if(status[0] == 's'){
		return status.split(" ").slice(2).join(" ");
	}else{
		return "invalid ticket !!!";
	}
}

export function gtcVersion(visitor) {
	return visitor.gtc?.version;
}
