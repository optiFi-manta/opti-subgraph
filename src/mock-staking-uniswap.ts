import {
  APYUpdated as APYUpdatedEvent,
  EmergencyWithdraw as EmergencyWithdrawEvent,
  PartialWithdraw as PartialWithdrawEvent,
  Staked as StakedEvent,
  WithdrawAll as WithdrawAllEvent,
} from "../generated/MockStakingUniswap/MockStakingUniswap"
import {
  APYUpdated,
  EmergencyWithdraw,
  PartialWithdraw,
  Staked,
  WithdrawAll,
} from "../generated/schema"

export function handleAPYUpdated(event: APYUpdatedEvent): void {
  let entity = new APYUpdated(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.oldAPY = event.params.oldAPY
  entity.newAPY = event.params.newAPY

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleEmergencyWithdraw(event: EmergencyWithdrawEvent): void {
  let entity = new EmergencyWithdraw(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.withdrawer = event.params.withdrawer
  entity.amount = event.params.amount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handlePartialWithdraw(event: PartialWithdrawEvent): void {
  let entity = new PartialWithdraw(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.withdrawer = event.params.withdrawer
  entity.amount = event.params.amount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleStaked(event: StakedEvent): void {
  let entity = new Staked(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.staker = event.params.staker
  entity.amount = event.params.amount
  entity.durationInDays = event.params.durationInDays

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleWithdrawAll(event: WithdrawAllEvent): void {
  let entity = new WithdrawAll(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.withdrawer = event.params.withdrawer
  entity.amount = event.params.amount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
