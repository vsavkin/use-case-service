# Use Case Service

NgRx is a great way to manage the state of Angular applications. It is akin to event sourcing and provides nice properties. But as with event sourcing, it may not be the best option for all domain or may be too unfamiliar for certain teams.

You can get a lot of benefits of NgRx in a more a la carte fashion if you use the approached shown in this repo.

NgRx clearly separates your code into the following:

- UI (components)
- State management (reducers)
- Side effects and coordination (effects classes)

The approach in this repo separates your code into the following:

- UI (components)
- State management and side effects (use case services)

Ads you can see AppComponent merely subscribes to the observables provided by the service, and invokes actions. It doesn't know how to communicate to the backend or the state is stored locally.

TodosServices manages the use case of completing and adding todos. Here we are using observables (similar to how it is done in ngrx/Effects) to implement coordination (e.g., we are using concatMap there).

TodosRepository is extracted to show that we can factor out certain low-level things as talking to the service. The use case service doesn't have to worry about them. In simple cases those two can be merged.

What's nice about this approach is that:
- Our components are simple. They only manage UI.
- The use case service can implement coordination. It doesn't handle any UI stuff. So it is easier to test in isolation. Because we have one instance of the use case service per app, it is easier to implement data caching etc.