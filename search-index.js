var N=null,E="",T="t",U="u",searchIndex={};
var R=["A stream for writing structured data as json.","result","string","error","Create a new json stream.","is_valid","Whether the stream has seen a complete, valid json…","Complete the stream and return the inner writer.","into_inner_unchecked","Get the inner writer back out of the stream without…","try_from","try_into","borrow_mut","type_id","to_string","formatter","arguments","seq_begin","seq_elem","map_begin","option","map_value","Formatter","An error encountered while visiting a value.","Stream a value.","Stream a format.","Stream a signed integer.","Stream an unsigned integer.","Stream a 128-bit signed integer.","Stream a 128-bit unsigned integer.","Stream a floating point value.","Stream a boolean.","Stream a unicode character.","Stream a UTF8 string.","Stream an empty value.","Begin a map.","Stream a map key.","Stream a map value.","End a map.","Begin a sequence.","Stream a sequence element.","End a sequence.","map_key_begin","Begin a map key.","map_value_begin","Begin a map value.","seq_elem_begin","Begin a sequence element.","map_key","map_end","seq_end","sval::stream","A borrowed stream wrapper.","The type returned by streaming methods.","stream","sval::test","to_owned","clone_into","borrow","typeid","sval::stream::stack","sval::value","serialize","ordering","OwnedStream","RefMutStream","OwnedValue","Arguments"];
searchIndex["sval"]={"doc":"A small, no-std, object-safe, serialization-only framework.","i":[[3,"Error","sval",R[23],N,N],[5,R[54],E,"Stream the structure of a [`Value`] using the given…",N,[[],[[R[3]],[R[1],[R[3]]]]]],[11,"custom",E,"Get an error from a format. ",0,[[],["self"]]],[11,"source",E,"The lower-level source of this error, if any. ",0,[[["self"]],[[R[20],[R[3]]],[R[3]]]]],[11,"as_error",E,"Get a reference to a standard error. ",0,[[["self"]],[R[3]]]],[11,"into_error",E,"Convert into a standard error. ",0,[[],[["box",[R[3]]],[R[3]]]]],[11,"into_io_error",E,"Convert into an io error. ",0,[[],[R[3]]]],[11,"msg",E,"Capture a static message as an error. ",0,[[["str"]],["self"]]],[11,"unsupported",E,"Declare some structure as unsupported. ",0,[[["str"]],["self"]]],[11,"is_unsupported",E,"Whether or not an error is because some operation was…",0,[[["self"]],["bool"]]],[0,"test",E,"Helpers for testing value implementations.",N,N],[4,"Token",R[55],"The kind of token being produced.",N,N],[13,"MapBegin",E,E,1,N],[13,"MapEnd",E,E,1,N],[13,"SeqBegin",E,E,1,N],[13,"SeqEnd",E,E,1,N],[13,"Signed",E,E,1,N],[13,"Unsigned",E,E,1,N],[13,"Float",E,E,1,N],[13,"BigSigned",E,E,1,N],[13,"BigUnsigned",E,E,1,N],[13,"Bool",E,E,1,N],[13,"Str",E,E,1,N],[13,"Char",E,E,1,N],[13,"None",E,E,1,N],[5,"tokens",E,"Collect a value into a sequence of tokens.",N,[[],[["vec",["token"]],["token"]]]],[0,"fmt","sval","Integration between `sval` and `std::fmt`.",N,N],[5,"to_debug","sval::fmt","Convert a [`Value`] into a [`Debug`].",N,[[]]],[5,"debug",E,"Format a [`Value`] using the given [`Formatter`].",N,[[[R[15]]],[R[1]]]],[0,"serde","sval","Integration between `sval` and `serde`.",N,N],[5,"to_serialize","sval::serde","Convert a [`Value`] into a [`Serialize`].",N,[[]]],[5,R[62],E,"Serialize a [`Value`] using the given [`Serializer`].",N,[[["s"]],[R[1]]]],[5,"to_value",E,"Convert a [`Serialize`] into a [`Value`].",N,[[]]],[5,R[54],E,"Stream a [`Serialize`] using the given [`Stream`].",N,[[],[[R[3]],[R[1],[R[3]]]]]],[0,R[54],"sval","A stream for datastructures.",N,N],[3,R[67],R[51],"This structure represents a safely precompiled version of…",N,N],[3,"Error",E,R[23],N,N],[3,R[64],E,"An owned stream wrapper.",N,N],[3,R[65],E,R[52],N,N],[11,R[54],E,R[24],2,[[["s"]],[[R[3]],[R[1],[R[3]]]]]],[11,"new",E,"Begin an owned stream.",2,[[["s"]],["self"]]],[11,"into_inner",E,"Unwrap the inner stream.",2,[[],["s"]]],[11,R[12],E,"Get a reference to the stream that can be used by a value.",2,[[["self"]],["refmutstream"]]],[11,"any",E,R[24],2,[[["self"]],[R[1]]]],[11,"fmt",E,R[25],2,[[["self"],[R[16]]],[R[1]]]],[11,"i64",E,R[26],2,[[["self"],["i64"]],[R[1]]]],[11,"u64",E,R[27],2,[[["self"],["u64"]],[R[1]]]],[11,"i128",E,R[28],2,[[["self"],["i128"]],[R[1]]]],[11,"u128",E,R[29],2,[[["self"],["u128"]],[R[1]]]],[11,"f64",E,R[30],2,[[["self"],["f64"]],[R[1]]]],[11,"bool",E,R[31],2,[[["self"],["bool"]],[R[1]]]],[11,"char",E,R[32],2,[[["self"],["char"]],[R[1]]]],[11,"str",E,R[33],2,[[["self"],["str"]],[R[1]]]],[11,"none",E,R[34],2,[[["self"]],[R[1]]]],[11,R[19],E,R[35],2,[[["self"],[R[20],["usize"]],["usize"]],[R[1]]]],[11,R[48],E,R[36],2,[[["self"]],[R[1]]]],[11,R[21],E,R[37],2,[[["self"]],[R[1]]]],[11,R[49],E,R[38],2,[[["self"]],[R[1]]]],[11,R[17],E,R[39],2,[[["self"],[R[20],["usize"]],["usize"]],[R[1]]]],[11,R[18],E,R[40],2,[[["self"]],[R[1]]]],[11,R[50],E,R[41],2,[[["self"]],[R[1]]]],[11,R[42],E,R[43],2,[[["self"]],[["self"],[R[1],[R[3]]],[R[3]]]]],[11,R[44],E,R[45],2,[[["self"]],[["self"],[R[1],[R[3]]],[R[3]]]]],[11,R[46],E,R[47],2,[[["self"]],[["self"],[R[1],[R[3]]],[R[3]]]]],[11,"any",E,R[24],3,[[["self"]],[R[1]]]],[11,"fmt",E,R[25],3,[[["self"],[R[16]]],[R[1]]]],[11,"i64",E,R[26],3,[[["self"],["i64"]],[R[1]]]],[11,"u64",E,R[27],3,[[["self"],["u64"]],[R[1]]]],[11,"i128",E,R[28],3,[[["self"],["i128"]],[R[1]]]],[11,"u128",E,R[29],3,[[["self"],["u128"]],[R[1]]]],[11,"f64",E,R[30],3,[[["self"],["f64"]],[R[1]]]],[11,"bool",E,R[31],3,[[["self"],["bool"]],[R[1]]]],[11,"char",E,R[32],3,[[["self"],["char"]],[R[1]]]],[11,"str",E,R[33],3,[[["self"],["str"]],[R[1]]]],[11,"none",E,R[34],3,[[["self"]],[R[1]]]],[11,R[19],E,R[35],3,[[["self"],[R[20],["usize"]],["usize"]],[R[1]]]],[11,R[48],E,R[36],3,[[["self"]],[R[1]]]],[11,R[21],E,R[37],3,[[["self"]],[R[1]]]],[11,R[49],E,R[38],3,[[["self"]],[R[1]]]],[11,R[17],E,R[39],3,[[["self"],[R[20],["usize"]],["usize"]],[R[1]]]],[11,R[18],E,R[40],3,[[["self"]],[R[1]]]],[11,R[50],E,R[41],3,[[["self"]],[R[1]]]],[11,R[42],E,R[43],3,[[["self"]],[["self"],[R[1],[R[3]]],[R[3]]]]],[11,R[44],E,R[45],3,[[["self"]],[["self"],[R[1],[R[3]]],[R[3]]]]],[11,R[46],E,R[47],3,[[["self"]],[["self"],[R[1],[R[3]]],[R[3]]]]],[0,"stack",E,"A fixed-size, stateful stack for streams.",N,N],[3,"Pos",R[60],"The expected position in the stream.",N,N],[3,"Depth",E,"The depth of a position.",N,N],[3,"Stack",E,"A container for the stream state.",N,N],[11,"is_key",E,"Whether the current position is a map key.",4,[[["self"]],["bool"]]],[11,"is_value",E,"Whether the current position is a map value.",4,[[["self"]],["bool"]]],[11,"is_elem",E,"Whether the current position is a sequence element.",4,[[["self"]],["bool"]]],[11,"is_empty_map",E,"Whether the current position is an empty map.",4,[[["self"]],["bool"]]],[11,"is_empty_seq",E,"Whether the current position is an empty sequence.",4,[[["self"]],["bool"]]],[11,"depth",E,"The depth of this position.",4,[[["self"]],["depth"]]],[11,"new",E,"Create a new stack.",5,[[],["self"]]],[11,"clear",E,"Clear the stack so that it can be re-used.",5,[[["self"]]]],[11,"current",E,"Get the current position in the stack.",5,[[["self"]],["pos"]]],[11,"primitive",E,"Push a primitive.",5,[[["self"]],[[R[1],["pos",R[3]]],["pos"],[R[3]]]]],[11,R[19],E,"Begin a new map.",5,[[["self"]],[[R[1],["pos",R[3]]],["pos"],[R[3]]]]],[11,R[48],E,R[43],5,[[["self"]],[[R[1],["pos",R[3]]],["pos"],[R[3]]]]],[11,R[21],E,R[45],5,[[["self"]],[[R[1],["pos",R[3]]],["pos"],[R[3]]]]],[11,R[49],E,"Complete the current map.",5,[[["self"]],[[R[1],["pos",R[3]]],["pos"],[R[3]]]]],[11,R[17],E,"Begin a new sequence.",5,[[["self"]],[[R[1],["pos",R[3]]],["pos"],[R[3]]]]],[11,R[18],E,R[47],5,[[["self"]],[[R[1],["pos",R[3]]],["pos"],[R[3]]]]],[11,R[50],E,"Complete the current sequence.",5,[[["self"]],[[R[1],["pos",R[3]]],["pos"],[R[3]]]]],[11,"can_end",E,"Whether or not the stack has seen a complete and valid…",5,[[["self"]],["bool"]]],[11,"end",E,"Complete the stack.",5,[[["self"]],[[R[3]],[R[1],[R[3]]]]]],[6,"Result",R[51],R[53],N,N],[8,"Stream",E,"A receiver for the structure of a value.",N,N],[11,"fmt",E,R[25],6,[[["self"],[R[16]]],[R[1]]]],[11,"i64",E,R[26],6,[[["self"],["i64"]],[R[1]]]],[11,"u64",E,R[27],6,[[["self"],["u64"]],[R[1]]]],[11,"i128",E,"Stream a 128bit signed integer.",6,[[["self"],["i128"]],[R[1]]]],[11,"u128",E,"Stream a 128bit unsigned integer.",6,[[["self"],["u128"]],[R[1]]]],[11,"f64",E,R[30],6,[[["self"],["f64"]],[R[1]]]],[11,"bool",E,R[31],6,[[["self"],["bool"]],[R[1]]]],[11,"char",E,R[32],6,[[["self"],["char"]],[R[1]]]],[11,"str",E,"Stream a UTF-8 string slice.",6,[[["self"],["str"]],[R[1]]]],[11,"none",E,R[34],6,[[["self"]],[R[1]]]],[11,R[19],E,R[35],6,[[["self"],[R[20],["usize"]],["usize"]],[R[1]]]],[11,R[48],E,R[43],6,[[["self"]],[R[1]]]],[11,R[21],E,R[45],6,[[["self"]],[R[1]]]],[11,R[49],E,R[38],6,[[["self"]],[R[1]]]],[11,R[17],E,R[39],6,[[["self"],[R[20],["usize"]],["usize"]],[R[1]]]],[11,R[18],E,R[47],6,[[["self"]],[R[1]]]],[11,R[50],E,R[41],6,[[["self"]],[R[1]]]],[0,"value","sval","A streamable value.",N,N],[3,"Stream",R[61],R[52],N,N],[3,R[66],E,"An owned, immutable value.",N,N],[3,"Error",E,R[23],N,N],[11,"collect",E,"Get an owned value from an arbitrary [`Value`].",7,[[],["self"]]],[11,"from_shared",E,"Get an owned value from an already shared [`Value`].",7,[[],["self"]]],[6,"Result",E,R[53],N,N],[8,"Value",E,"A value with a streamable structure.",N,N],[10,R[54],E,"Stream this value.",8,[[["self"],[R[54]]],[R[1]]]],[11,R[10],"sval",E,0,[[[U]],[R[1]]]],[11,"into",E,E,0,[[],[U]]],[11,"from",E,E,0,[[[T]],[T]]],[11,R[11],E,E,0,[[],[R[1]]]],[11,R[58],E,E,0,[[["self"]],[T]]],[11,R[12],E,E,0,[[["self"]],[T]]],[11,R[13],E,E,0,[[["self"]],[R[59]]]],[11,R[14],E,E,0,[[["self"]],[R[2]]]],[11,R[10],R[55],E,1,[[[U]],[R[1]]]],[11,"into",E,E,1,[[],[U]]],[11,"from",E,E,1,[[[T]],[T]]],[11,R[11],E,E,1,[[],[R[1]]]],[11,R[58],E,E,1,[[["self"]],[T]]],[11,R[12],E,E,1,[[["self"]],[T]]],[11,R[13],E,E,1,[[["self"]],[R[59]]]],[11,R[56],E,E,1,[[["self"]],[T]]],[11,R[57],E,E,1,[[["self"],[T]]]],[11,R[10],R[51],E,9,[[[U]],[R[1]]]],[11,"into",E,E,9,[[],[U]]],[11,"from",E,E,9,[[[T]],[T]]],[11,R[11],E,E,9,[[],[R[1]]]],[11,R[58],E,E,9,[[["self"]],[T]]],[11,R[12],E,E,9,[[["self"]],[T]]],[11,R[13],E,E,9,[[["self"]],[R[59]]]],[11,R[14],E,E,9,[[["self"]],[R[2]]]],[11,R[56],E,E,9,[[["self"]],[T]]],[11,R[57],E,E,9,[[["self"],[T]]]],[11,R[10],E,E,2,[[[U]],[R[1]]]],[11,"into",E,E,2,[[],[U]]],[11,"from",E,E,2,[[[T]],[T]]],[11,R[11],E,E,2,[[],[R[1]]]],[11,R[58],E,E,2,[[["self"]],[T]]],[11,R[12],E,E,2,[[["self"]],[T]]],[11,R[13],E,E,2,[[["self"]],[R[59]]]],[11,R[10],E,E,3,[[[U]],[R[1]]]],[11,"into",E,E,3,[[],[U]]],[11,"from",E,E,3,[[[T]],[T]]],[11,R[11],E,E,3,[[],[R[1]]]],[11,R[58],E,E,3,[[["self"]],[T]]],[11,R[12],E,E,3,[[["self"]],[T]]],[11,R[13],E,E,3,[[["self"]],[R[59]]]],[11,R[10],R[60],E,4,[[[U]],[R[1]]]],[11,"into",E,E,4,[[],[U]]],[11,"from",E,E,4,[[[T]],[T]]],[11,R[11],E,E,4,[[],[R[1]]]],[11,R[58],E,E,4,[[["self"]],[T]]],[11,R[12],E,E,4,[[["self"]],[T]]],[11,R[13],E,E,4,[[["self"]],[R[59]]]],[11,R[56],E,E,4,[[["self"]],[T]]],[11,R[57],E,E,4,[[["self"],[T]]]],[11,R[10],E,E,10,[[[U]],[R[1]]]],[11,"into",E,E,10,[[],[U]]],[11,"from",E,E,10,[[[T]],[T]]],[11,R[11],E,E,10,[[],[R[1]]]],[11,R[58],E,E,10,[[["self"]],[T]]],[11,R[12],E,E,10,[[["self"]],[T]]],[11,R[13],E,E,10,[[["self"]],[R[59]]]],[11,R[56],E,E,10,[[["self"]],[T]]],[11,R[57],E,E,10,[[["self"],[T]]]],[11,R[10],E,E,5,[[[U]],[R[1]]]],[11,"into",E,E,5,[[],[U]]],[11,"from",E,E,5,[[[T]],[T]]],[11,R[11],E,E,5,[[],[R[1]]]],[11,R[58],E,E,5,[[["self"]],[T]]],[11,R[12],E,E,5,[[["self"]],[T]]],[11,R[13],E,E,5,[[["self"]],[R[59]]]],[11,R[56],E,E,5,[[["self"]],[T]]],[11,R[57],E,E,5,[[["self"],[T]]]],[11,R[10],R[61],E,7,[[[U]],[R[1]]]],[11,"into",E,E,7,[[],[U]]],[11,"from",E,E,7,[[[T]],[T]]],[11,R[11],E,E,7,[[],[R[1]]]],[11,R[58],E,E,7,[[["self"]],[T]]],[11,R[12],E,E,7,[[["self"]],[T]]],[11,R[13],E,E,7,[[["self"]],[R[59]]]],[11,R[56],E,E,7,[[["self"]],[T]]],[11,R[57],E,E,7,[[["self"],[T]]]],[11,"clone",R[51],E,9,[[["self"]],[R[16]]]],[11,"fmt",E,E,9,[[["self"],[R[15]]],[[R[3]],[R[1],[R[3]]]]]],[11,"fmt",E,E,9,[[["self"],[R[15]]],[[R[3]],[R[1],[R[3]]]]]],[11,R[62],E,E,9,[[["self"],["s"]],[R[1]]]],[11,R[54],E,E,9,[[["self"],[R[54]]],[R[1]]]],[11,R[54],R[61],E,7,[[["self"],[R[54]]],[R[1]]]],[11,"fmt","sval",E,0,[[["self"],[R[15]]],[R[1]]]],[11,"fmt",R[55],E,1,[[["self"],[R[15]]],[R[1]]]],[11,"fmt",R[61],E,7,[[["self"],[R[15]]],[R[1]]]],[11,"fmt","sval",E,0,[[["self"],[R[15]]],[R[1]]]],[11,"eq",R[55],E,1,[[["self"],["token"]],["bool"]]],[11,"ne",E,E,1,[[["self"],["token"]],["bool"]]],[11,"eq",R[60],E,10,[[["self"],["depth"]],["bool"]]],[11,"ne",E,E,10,[[["self"],["depth"]],["bool"]]],[11,"cmp",E,E,10,[[["self"],["depth"]],[R[63]]]],[11,"partial_cmp",E,E,10,[[["self"],["depth"]],[[R[20],[R[63]]],[R[63]]]]],[11,"lt",E,E,10,[[["self"],["depth"]],["bool"]]],[11,"le",E,E,10,[[["self"],["depth"]],["bool"]]],[11,"gt",E,E,10,[[["self"],["depth"]],["bool"]]],[11,"ge",E,E,10,[[["self"],["depth"]],["bool"]]],[11,"as_ref","sval",E,0,[[["self"]],[R[3]]]],[11,"from",E,E,0,[[["e"]],["self"]]],[11,"from",R[61],E,7,[[["usize"]],["self"]]],[11,"from",E,E,7,[[["u8"]],["self"]]],[11,"from",E,E,7,[[["u16"]],["self"]]],[11,"from",E,E,7,[[["u32"]],["self"]]],[11,"from",E,E,7,[[["u64"]],["self"]]],[11,"from",E,E,7,[[["u128"]],["self"]]],[11,"from",E,E,7,[[["isize"]],["self"]]],[11,"from",E,E,7,[[["i8"]],["self"]]],[11,"from",E,E,7,[[["i16"]],["self"]]],[11,"from",E,E,7,[[["i32"]],["self"]]],[11,"from",E,E,7,[[["i64"]],["self"]]],[11,"from",E,E,7,[[["i128"]],["self"]]],[11,"from",E,E,7,[[["f32"]],["self"]]],[11,"from",E,E,7,[[["f64"]],["self"]]],[11,"from",E,E,7,[[["bool"]],["self"]]],[11,"from",E,E,7,[[["char"]],["self"]]],[11,"from",E,E,7,[[[R[2]]],["self"]]],[11,"clone",R[55],E,1,[[["self"]],["token"]]],[11,"clone",R[60],E,4,[[["self"]],["pos"]]],[11,"clone",E,E,10,[[["self"]],["depth"]]],[11,"clone",E,E,5,[[["self"]],["stack"]]],[11,"clone",R[61],E,7,[[["self"]],["ownedvalue"]]],[11,"default",R[60],E,5,[[],["self"]]]],"p":[[3,"Error"],[4,"Token"],[3,R[64]],[3,R[65]],[3,"Pos"],[3,"Stack"],[8,"Stream"],[3,R[66]],[8,"Value"],[3,R[67]],[3,"Depth"]]};
searchIndex["sval_json"]={"doc":"JSON support for `sval`.","i":[[3,R[22],"sval_json",R[0],N,N],[3,"Writer",E,R[0],N,N],[3,"End",E,"An error attempting to end a JSON stream.",N,N],[12,R[54],E,"The original stream. ",0,N],[5,"to_fmt",E,"Write a [`sval::Value`] to a formatter.",N,[[],[[R[1],[R[3]]],[R[3]]]]],[5,R[14],E,"Write a [`sval::Value`] to a string.",N,[[],[[R[1],[R[2],R[3]]],[R[2]],[R[3]]]]],[5,"to_writer",E,"Write a [`sval::Value`] to a writer.",N,[[],[[R[1],[R[3]]],[R[3]]]]],[11,"new",E,R[4],1,[[["w"]],["self"]]],[11,R[5],E,R[6],1,[[["self"]],["bool"]]],[11,"end",E,R[7],1,[[],[[R[1],["end"]],["end"]]]],[11,R[8],E,R[9],1,[[],["w"]]],[11,"new",E,R[4],2,[[["w"]],["self"]]],[11,R[5],E,R[6],2,[[["self"]],["bool"]]],[11,"end",E,R[7],2,[[],[[R[1],["end"]],["end"]]]],[11,R[8],E,R[9],2,[[],["w"]]],[11,R[10],E,E,1,[[[U]],[R[1]]]],[11,"into",E,E,1,[[],[U]]],[11,"from",E,E,1,[[[T]],[T]]],[11,R[11],E,E,1,[[],[R[1]]]],[11,R[58],E,E,1,[[["self"]],[T]]],[11,R[12],E,E,1,[[["self"]],[T]]],[11,R[13],E,E,1,[[["self"]],[R[59]]]],[11,R[10],E,E,2,[[[U]],[R[1]]]],[11,"into",E,E,2,[[],[U]]],[11,"from",E,E,2,[[[T]],[T]]],[11,R[11],E,E,2,[[],[R[1]]]],[11,R[58],E,E,2,[[["self"]],[T]]],[11,R[12],E,E,2,[[["self"]],[T]]],[11,R[13],E,E,2,[[["self"]],[R[59]]]],[11,R[10],E,E,0,[[[U]],[R[1]]]],[11,"into",E,E,0,[[],[U]]],[11,"from",E,E,0,[[[T]],[T]]],[11,R[11],E,E,0,[[],[R[1]]]],[11,R[58],E,E,0,[[["self"]],[T]]],[11,R[12],E,E,0,[[["self"]],[T]]],[11,R[13],E,E,0,[[["self"]],[R[59]]]],[11,R[14],E,E,0,[[["self"]],[R[2]]]],[11,"fmt",E,E,0,[[["self"],[R[15]]],[R[1]]]],[11,"fmt",E,E,0,[[["self"],[R[15]]],[R[1]]]],[11,"source",E,E,0,[[["self"]],[[R[20],[R[3]]],[R[3]]]]],[11,"fmt",E,E,1,[[["self"],[R[16]]],[R[1]]]],[11,"i128",E,E,1,[[["self"],["i128"]],[R[1]]]],[11,"u128",E,E,1,[[["self"],["u128"]],[R[1]]]],[11,"f64",E,E,1,[[["self"],["f64"]],[R[1]]]],[11,"bool",E,E,1,[[["self"],["bool"]],[R[1]]]],[11,"char",E,E,1,[[["self"],["char"]],[R[1]]]],[11,"str",E,E,1,[[["self"],["str"]],[R[1]]]],[11,"none",E,E,1,[[["self"]],[R[1]]]],[11,R[17],E,E,1,[[["self"],[R[20],["usize"]],["usize"]],[R[1]]]],[11,R[18],E,E,1,[[["self"]],[R[1]]]],[11,R[50],E,E,1,[[["self"]],[R[1]]]],[11,R[19],E,E,1,[[["self"],[R[20],["usize"]],["usize"]],[R[1]]]],[11,R[48],E,E,1,[[["self"]],[R[1]]]],[11,R[21],E,E,1,[[["self"]],[R[1]]]],[11,R[49],E,E,1,[[["self"]],[R[1]]]],[11,"fmt",E,E,2,[[["self"],[R[16]]],[R[1]]]],[11,"i64",E,E,2,[[["self"],["i64"]],[R[1]]]],[11,"u64",E,E,2,[[["self"],["u64"]],[R[1]]]],[11,"f64",E,E,2,[[["self"],["f64"]],[R[1]]]],[11,"bool",E,E,2,[[["self"],["bool"]],[R[1]]]],[11,"char",E,E,2,[[["self"],["char"]],[R[1]]]],[11,"str",E,E,2,[[["self"],["str"]],[R[1]]]],[11,"none",E,E,2,[[["self"]],[R[1]]]],[11,R[17],E,E,2,[[["self"],[R[20],["usize"]],["usize"]],[R[1]]]],[11,R[18],E,E,2,[[["self"]],[R[1]]]],[11,R[50],E,E,2,[[["self"]],[R[1]]]],[11,R[19],E,E,2,[[["self"],[R[20],["usize"]],["usize"]],[R[1]]]],[11,R[48],E,E,2,[[["self"]],[R[1]]]],[11,R[21],E,E,2,[[["self"]],[R[1]]]],[11,R[49],E,E,2,[[["self"]],[R[1]]]]],"p":[[3,"End"],[3,R[22]],[3,"Writer"]]};
initSearch(searchIndex);addSearchOptions(searchIndex);