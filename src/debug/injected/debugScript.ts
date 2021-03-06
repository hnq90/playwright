/**
 * Copyright (c) Microsoft Corporation.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { ConsoleAPI } from './consoleApi';
import { Recorder } from './recorder';
import InjectedScript from '../../injected/injectedScript';

export default class DebugScript {
  consoleAPI: ConsoleAPI | undefined;
  recorder: Recorder | undefined;

  constructor() {
  }

  initialize(injectedScript: InjectedScript, options: { console?: boolean, record?: boolean }) {
    if (options.console)
      this.consoleAPI = new ConsoleAPI(injectedScript);
    if (options.record)
      this.recorder = new Recorder(injectedScript);
  }
}
