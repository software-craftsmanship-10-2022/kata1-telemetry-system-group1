# SOLID principles violated (detected by test implementation)

## Dependency inversion: an instance of class TelemetryClient is created in the class context

    >> evidence: spies/mocks (even fake class) must be defined for TelemetryClient instance to test parts of implementation
    >> solution: pass instance via constructor

## Interface segregation: test bound to implementation, not abstraction

    >> evidence: spies/mocks (even fake class)  must be defined for TelemetryClient instance to test parts of implementation
    >> solution: define interfaces to be implemented

## Single responsability: method checkTransmission is responsible of more than one action

    >> evidence: management of more than one responsability (send | connect | disconnect)
    >> solution: extract / encapsulate implementation

## Open/close: method checkTransmission should be modified if future requirements are redifined

    >> evidence: it's responsible of more than one action
    >> solution: apply Single Responsability principle
