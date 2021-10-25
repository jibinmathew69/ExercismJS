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
	delete tickets[visitor['ticketId']];
	return {
		name: name,
		age: age,
		ticketId: null
	}
}

export function ticketStatus(tickets, ticketId) {
	if (tickets.ticketId === undefined){
		return "unknown ticket id";
	}else if(tickets === null){
		return "not sold";
	}else{
		return `sold to ${tickets.ticketId}`
	}
}

export function simpleTicketStatus(tickets, ticketId) {
  throw new Error('Please implement the simpleTicketStatus function.');
}

export function gtcVersion(visitor) {
  throw new Error('Please implement the gtcVersion function.');
}
