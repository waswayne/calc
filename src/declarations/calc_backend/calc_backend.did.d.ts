import type { Principal } from '@dfinity/principal';
import type { ActorMethod } from '@dfinity/agent';

export interface _SERVICE {
  'add' : ActorMethod<[bigint, bigint], bigint>,
  'div' : ActorMethod<[bigint, bigint], bigint>,
  'mul' : ActorMethod<[bigint, bigint], bigint>,
  'sub' : ActorMethod<[bigint, bigint], bigint>,
}
