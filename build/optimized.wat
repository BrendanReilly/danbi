(module
 (type $i32_i32_=>_i32 (func (param i32 i32) (result i32)))
 (memory $0 0)
 (export "add" (func $src/index/add))
 (export "multiply" (func $src/index/multiply))
 (export "memory" (memory $0))
 (func $src/index/add (param $0 i32) (param $1 i32) (result i32)
  local.get $0
  local.get $1
  i32.add
 )
 (func $src/index/multiply (param $0 i32) (param $1 i32) (result i32)
  local.get $0
  local.get $1
  i32.mul
 )
)
