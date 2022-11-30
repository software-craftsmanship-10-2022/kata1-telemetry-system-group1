import { expect } from "chai";
import "mocha";
import * as Sinon from "sinon";
import TelemetryClient from "../telemetry-system/telemetry-client";
import TelemetryDiagnosticControls from "../telemetry-system/telemetry-diagnostic-controls";

describe("Telemetry System", () => {
  describe("TelemetryDiagnosticControls", () => {
    const spyDisconnectFromTelemetricClient = Sinon.spy(
      TelemetryClient.prototype,
      "disconnect"
    );

    it("CheckTransmission should read default diagnostic info value", () => {
      const telemetryDiagnosticControls = new TelemetryDiagnosticControls();
      const diagnosticInfo = telemetryDiagnosticControls.readDiagnosticInfo();
      expect(diagnosticInfo).to.equal("");
    });

    it("CheckTransmission should write diagnostic info value", () => {
      const telemetryDiagnosticControls = new TelemetryDiagnosticControls();
      const defaultDiagnosticInfo =
        telemetryDiagnosticControls.readDiagnosticInfo();
      expect(defaultDiagnosticInfo).to.equal("");

      telemetryDiagnosticControls.writeDiagnosticInfo("foo");

      const updatedDiagnosticInfo =
        telemetryDiagnosticControls.readDiagnosticInfo();
      expect(updatedDiagnosticInfo).to.equal("foo");
    });

    it("CheckTransmission should send a diagnostic message and receive a status message response", () => {
      const telemetryDiagnosticControls = new TelemetryDiagnosticControls();

      telemetryDiagnosticControls.checkTransmission();

      expect(spyDisconnectFromTelemetricClient.calledOnce).to.be.true;
    });
  });
});
