import { expect } from "chai";
import "mocha";
import TelemetryDiagnosticControls from "../telemetry-system/telemetry-diagnostic-controls-SOLID";
import { DiagnosticControlsClient } from "../types";

class TestDiagnosticControlsClient implements DiagnosticControlsClient {
  disconnect(): void {
    console.log("disconnect");
  }
  connect(telemetryServerConnectionString: string): void {
    console.log({ telemetryServerConnectionString });
  }
  getOnlineStatus(): boolean {
    return false;
  }
  diagnosticMessage(): string {
    return "diagnosticMessage";
  }
  receive(): string {
    return "receive";
  }
  send(message: string): void {
    console.log({ message });
  }
}

describe("Given TelemetryDiagnosticControls class", () => {
  it("When call to readDiagnosticInfo function then should return the default value", () => {
    const telemetryDiagnosticControls = new TelemetryDiagnosticControls(
      new TestDiagnosticControlsClient()
    );
    const result = telemetryDiagnosticControls.readDiagnosticInfo();
    expect(result).to.equal("");
  });

  it("When call to writeDiagnosticInfo function then should write the value in diagnosticInfo", () => {
    const telemetryDiagnosticControls = new TelemetryDiagnosticControls(
      new TestDiagnosticControlsClient()
    );
    const value = "TEST_VALUE";
    telemetryDiagnosticControls.writeDiagnosticInfo(value);
    const result = telemetryDiagnosticControls.readDiagnosticInfo();
    expect(result).to.equal(value);
  });

  it("When call to checkTransmission function and connection work then should write the value in diagnosticInfo", () => {
    const telemetryDiagnosticControls = new TelemetryDiagnosticControls(
      new TestDiagnosticControlsClient()
    );
    const value = "TEST_VALUE";
    telemetryDiagnosticControls.writeDiagnosticInfo(value);
    const result = telemetryDiagnosticControls.readDiagnosticInfo();
    expect(result).to.equal(value);
  });
});
