const postData = {
    "posts" : [
        {
            "title" : "Command and Query Responsibility Segregation",
            "slug" : "cqrs",
            "author" : "sai aung hlyan htet",
            "overview": "CQRS stands for Command and Query Responsibility Segregation, a pattern that separates read and update operations for a data store. Implementing CQRS in your application can maximize its performance, scalability, and security. The flexibility created by migrating to CQRS allows a system to better evolve over time and prevents update commands from causing merge conflicts at the domain level.",
            "context": "In traditional architectures, the same data model is used to query and update a database. That's simple and works well for basic CRUD operations. In more complex applications, however, this approach can become unwieldy. For example, on the read side, the application may perform many different queries, returning data transfer objects (DTOs) with different shapes. Object mapping can become complicated. On the write side, the model may implement complex validation and business logic. As a result, you can end up with an overly complex model that does too much.",
            "solution": "CQRS separates reads and writes into different models, using commands to update data, and queries to read data. Commands should be task-based, rather than data centric. Commands may be placed on a queue for asynchronous processing, rather than being processed synchronously. Queries never modify the database. A query returns a DTO that does not encapsulate any domain knowledge.",
            "image" : "https://learn.microsoft.com/en-us/azure/architecture/patterns/_images/command-and-query-responsibility-segregation-cqrs-tradition-crud.png"
    
        },
        {
            "title" : "event sourcing",
            "slug" : "event-sourcing",
            "author" : "sai aung hlyan htet",
            "overview": "Instead of storing just the current state of the data in a domain, use an append-only store to record the full series of actions taken on that data. The store acts as the system of record and can be used to materialize the domain objects. This can simplify tasks in complex domains, by avoiding the need to synchronize the data model and the business domain, while improving performance, scalability, and responsiveness. It can also provide consistency for transactional data, and maintain full audit trails and history that can enable compensating actions.",
            "context": "Most applications work with data, and the typical approach is for the application to maintain the current state of the data by updating it as users work with it. For example, in the traditional create, read, update, and delete (CRUD) model a typical data process is to read data from the store, make some modifications to it, and update the current state of the data with the new values—often by using transactions that lock the data.",
            "solution": "The Event Sourcing pattern defines an approach to handling operations on data that's driven by a sequence of events, each of which is recorded in an append-only store. Application code sends a series of events that imperatively describe each action that has occurred on the data to the event store, where they're persisted. Each event represents a set of changes to the data",
            "image" : "https://learn.microsoft.com/en-us/azure/architecture/patterns/_images/event-sourcing-overview.png"
        },
        {
            "title" : "saga",
            "slug" : "saga",
            "author" : "sai aung hlyan htet",
            "overview": "Use the Saga pattern to manage failures in a long-running process, such as when performing multiple transactions that each update a different service. The Saga pattern is a sequence of local transactions. Each local transaction updates data within a single service, and publishes a message or event to trigger the next local transaction in the saga. If a local transaction fails because it violates a business rule, then the saga executes a series of compensating transactions that undo the changes that were made by the preceding local transactions.",
            "context": "In a distributed system, a business transaction may need to update data that is owned by multiple services. For example, an online store may need to update its inventory in one service, and update a customer's order in another. If the second update fails, then the system must compensate for the first update. The Saga pattern describes how to solve this problem without using distributed transactions.",
            "solution": "A saga is a sequence of local transactions. Each local transaction updates data within a single service. The saga executes local transactions in a sequence that preserves consistency across all the services. If a local transaction fails because it violates a business rule, then the saga executes a series of compensating transactions that undo the changes that were made by the preceding local transactions.",
            "image" : "https://learn.microsoft.com/en-us/azure/architecture/reference-architectures/saga/images/saga-overview.png"
        }
        
    ] 
}

export default postData;