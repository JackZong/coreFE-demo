// src/ErrorHandler.ts your global error handler
import { ErrorListener, Exception, SagaGenerator } from "core-fe";
import { app } from "core-fe/lib/app";

export class ErrorHandler implements ErrorListener {
  *onError(exception: Exception): SagaGenerator {
    app.logger.error({
      elapsedTime: 0,
      action: "UNKNOWN_ACTION",
      errorCode: "UNKNOWN_ERROR",
      errorMessage: exception.message,
      info: {
        errorObject: JSON.stringify(exception),
      },
    });
  }
}
