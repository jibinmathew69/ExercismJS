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
  throw new Error('Please implement the revokeTicket function.');
}

export function ticketStatus(tickets, ticketId) {
  throw new Error('Please implement the ticketStatus function.');
}

export function simpleTicketStatus(tickets, ticketId) {
  throw new Error('Please implement the simpleTicketStatus function.');
}

export function gtcVersion(visitor) {
  throw new Error('Please implement the gtcVersion function.');
}
