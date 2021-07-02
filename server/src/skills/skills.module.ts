import { Module } from '@nestjs/common';

import { BasicDialogsModule } from './basic-dialogs/basic-dialogs.module';
import { NotesModule } from './notes/notes.module';
import { BoredModule } from './bored/bored.module';
import { JokesModule } from './jokes/jokes.module';
import { OpenBrowserService } from './open-browser/open-browser.service';

@Module({
  imports: [
    BasicDialogsModule,
    BoredModule,
    JokesModule,
    NotesModule,
  ],
  providers: [OpenBrowserService]
})
export class SkillsModule {}
