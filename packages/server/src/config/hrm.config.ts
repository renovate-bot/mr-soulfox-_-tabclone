// eslint-disable-next-line import/no-import-module-exports
import {INestApplication} from '@nestjs/common';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
declare const module: any;

export function hotModuleConfig(app: INestApplication): void {
	if (!module.hot) {
		return;
	}

	module.hot.accept();
	module.hot.dispose(() => app.close());
}
