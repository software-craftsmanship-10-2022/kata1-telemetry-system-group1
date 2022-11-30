export interface DiagnosticControlsClient {
  disconnect(): void;
  connect(telemetryServerConnectionString: string): void;
  getOnlineStatus(): boolean;
  diagnosticMessage(): string;
  receive(): string;
  send(message: string): void;
}
