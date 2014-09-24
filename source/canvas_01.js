(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 1025,
	height: 688,
	fps: 24,
	color: "#FFFFFF",
	manifest: []
};

// stage content:
(lib.canvas_01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_48 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(48).call(this.frame_48).wait(1));

	// mascaraVerde (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_24 = new cjs.Graphics().p("EgDBAl5MAAAhLxIGDAAMAAABLxg");
	var mask_graphics_25 = new cjs.Graphics().p("EgHsAl5MAAAhLxIPZAAMAAABLxg");
	var mask_graphics_26 = new cjs.Graphics().p("EgMWAl5MAAAhLxIYtAAMAAABLxg");
	var mask_graphics_27 = new cjs.Graphics().p("EgRBAl5MAAAhLxMAiDAAAMAAABLxg");
	var mask_graphics_28 = new cjs.Graphics().p("EgVsAl4MAAAhLvMArZAAAMAAABLvg");
	var mask_graphics_29 = new cjs.Graphics().p("EgaXAl5MAAAhLxMA0vAAAMAAABLxg");
	var mask_graphics_30 = new cjs.Graphics().p("EgfBAl5MAAAhLxMA+DAAAMAAABLxg");
	var mask_graphics_31 = new cjs.Graphics().p("EgjsAl4MAAAhLvMBHZAAAMAAABLvg");
	var mask_graphics_32 = new cjs.Graphics().p("EgoXAl5MAAAhLxMBQvAAAMAAABLxg");
	var mask_graphics_33 = new cjs.Graphics().p("EgtCAl5MAAAhLxMBaFAAAMAAABLxg");
	var mask_graphics_34 = new cjs.Graphics().p("EgxsAl4MAAAhLvMBjZAAAMAAABLvg");
	var mask_graphics_35 = new cjs.Graphics().p("Eg2XAl5MAAAhLxMBsvAAAMAAABLxg");
	var mask_graphics_36 = new cjs.Graphics().p("Eg7CAl5MAAAhLxMB2FAAAMAAABLxg");
	var mask_graphics_37 = new cjs.Graphics().p("Eg/tAl5MAAAhLxMB/bAAAMAAABLxg");
	var mask_graphics_38 = new cjs.Graphics().p("EhEXAl5MAAAhLxMCIvAAAMAAABLxg");
	var mask_graphics_39 = new cjs.Graphics().p("EhJCAl5MAAAhLxMCSFAAAMAAABLxg");
	var mask_graphics_40 = new cjs.Graphics().p("EhNtAl5MAAAhLxMCbbAAAMAAABLxg");
	var mask_graphics_41 = new cjs.Graphics().p("EhSYAl5MAAAhLxMCkxAAAMAAABLxg");
	var mask_graphics_42 = new cjs.Graphics().p("EhXCAl5MAAAhLxMCuFAAAMAAABLxg");
	var mask_graphics_43 = new cjs.Graphics().p("EhbtAl5MAAAhLxMC3bAAAMAAABLxg");
	var mask_graphics_44 = new cjs.Graphics().p("EhgYAl5MAAAhLxMDAxAAAMAAABLxg");
	var mask_graphics_45 = new cjs.Graphics().p("EhlDAl5MAAAhLxMDKHAAAMAAABLxg");
	var mask_graphics_46 = new cjs.Graphics().p("EhptAl5MAAAhLxMDTbAAAMAAABLxg");
	var mask_graphics_47 = new cjs.Graphics().p("EhuYAl5MAAAhLxMDcxAAAMAAABLxg");
	var mask_graphics_48 = new cjs.Graphics().p("EhzDAl4MAAAhLvMDmHAAAMAAABLvg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(24).to({graphics:mask_graphics_24,x:-48.2,y:455.5}).wait(1).to({graphics:mask_graphics_25,x:-25.5,y:455}).wait(1).to({graphics:mask_graphics_26,x:-2.7,y:454.6}).wait(1).to({graphics:mask_graphics_27,x:20,y:454.2}).wait(1).to({graphics:mask_graphics_28,x:42.7,y:453.8}).wait(1).to({graphics:mask_graphics_29,x:65.4,y:453.4}).wait(1).to({graphics:mask_graphics_30,x:88.2,y:453}).wait(1).to({graphics:mask_graphics_31,x:110.9,y:452.5}).wait(1).to({graphics:mask_graphics_32,x:133.6,y:452.1}).wait(1).to({graphics:mask_graphics_33,x:156.3,y:451.7}).wait(1).to({graphics:mask_graphics_34,x:179,y:451.3}).wait(1).to({graphics:mask_graphics_35,x:201.8,y:450.9}).wait(1).to({graphics:mask_graphics_36,x:224.5,y:450.5}).wait(1).to({graphics:mask_graphics_37,x:247.2,y:450.1}).wait(1).to({graphics:mask_graphics_38,x:269.9,y:449.6}).wait(1).to({graphics:mask_graphics_39,x:292.7,y:449.2}).wait(1).to({graphics:mask_graphics_40,x:315.4,y:448.8}).wait(1).to({graphics:mask_graphics_41,x:338.1,y:448.4}).wait(1).to({graphics:mask_graphics_42,x:360.8,y:448}).wait(1).to({graphics:mask_graphics_43,x:383.5,y:447.6}).wait(1).to({graphics:mask_graphics_44,x:406.3,y:447.2}).wait(1).to({graphics:mask_graphics_45,x:429,y:446.7}).wait(1).to({graphics:mask_graphics_46,x:451.7,y:446.3}).wait(1).to({graphics:mask_graphics_47,x:474.4,y:445.9}).wait(1).to({graphics:mask_graphics_48,x:497.2,y:445.5}).wait(1));

	// verde
	this.instance = new lib.zona_verde();
	this.instance.setTransform(654.4,522.9,1,1,0,0,0,370.5,171);
	this.instance.shadow = new cjs.Shadow("rgba(102,102,102,1)",0,0,14);
	this.instance._off = true;

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(24).to({_off:false},0).wait(25));

	// mascaraNaranja (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_12 = new cjs.Graphics().p("EgDBAl5MAAAhLxIGDAAMAAABLxg");
	var mask_1_graphics_13 = new cjs.Graphics().p("EgHsAl5MAAAhLxIPZAAMAAABLxg");
	var mask_1_graphics_14 = new cjs.Graphics().p("EgMWAl5MAAAhLxIYtAAMAAABLxg");
	var mask_1_graphics_15 = new cjs.Graphics().p("EgRBAl5MAAAhLxMAiDAAAMAAABLxg");
	var mask_1_graphics_16 = new cjs.Graphics().p("EgVsAl4MAAAhLvMArZAAAMAAABLvg");
	var mask_1_graphics_17 = new cjs.Graphics().p("EgaXAl5MAAAhLxMA0vAAAMAAABLxg");
	var mask_1_graphics_18 = new cjs.Graphics().p("EgfBAl5MAAAhLxMA+DAAAMAAABLxg");
	var mask_1_graphics_19 = new cjs.Graphics().p("EgjsAl4MAAAhLvMBHZAAAMAAABLvg");
	var mask_1_graphics_20 = new cjs.Graphics().p("EgoXAl5MAAAhLxMBQvAAAMAAABLxg");
	var mask_1_graphics_21 = new cjs.Graphics().p("EgtCAl5MAAAhLxMBaFAAAMAAABLxg");
	var mask_1_graphics_22 = new cjs.Graphics().p("EgxsAl4MAAAhLvMBjZAAAMAAABLvg");
	var mask_1_graphics_23 = new cjs.Graphics().p("Eg2XAl5MAAAhLxMBsvAAAMAAABLxg");
	var mask_1_graphics_24 = new cjs.Graphics().p("Eg7CAl5MAAAhLxMB2FAAAMAAABLxg");
	var mask_1_graphics_25 = new cjs.Graphics().p("Eg/tAl5MAAAhLxMB/bAAAMAAABLxg");
	var mask_1_graphics_26 = new cjs.Graphics().p("EhEXAl5MAAAhLxMCIvAAAMAAABLxg");
	var mask_1_graphics_27 = new cjs.Graphics().p("EhJCAl5MAAAhLxMCSFAAAMAAABLxg");
	var mask_1_graphics_28 = new cjs.Graphics().p("EhNtAl5MAAAhLxMCbbAAAMAAABLxg");
	var mask_1_graphics_29 = new cjs.Graphics().p("EhSYAl5MAAAhLxMCkxAAAMAAABLxg");
	var mask_1_graphics_30 = new cjs.Graphics().p("EhXCAl5MAAAhLxMCuFAAAMAAABLxg");
	var mask_1_graphics_31 = new cjs.Graphics().p("EhbtAl5MAAAhLxMC3bAAAMAAABLxg");
	var mask_1_graphics_32 = new cjs.Graphics().p("EhgYAl5MAAAhLxMDAxAAAMAAABLxg");
	var mask_1_graphics_33 = new cjs.Graphics().p("EhlDAl5MAAAhLxMDKHAAAMAAABLxg");
	var mask_1_graphics_34 = new cjs.Graphics().p("EhptAl5MAAAhLxMDTbAAAMAAABLxg");
	var mask_1_graphics_35 = new cjs.Graphics().p("EhuYAl5MAAAhLxMDcxAAAMAAABLxg");
	var mask_1_graphics_36 = new cjs.Graphics().p("EhzDAl4MAAAhLvMDmHAAAMAAABLvg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(12).to({graphics:mask_1_graphics_12,x:-48.2,y:455.5}).wait(1).to({graphics:mask_1_graphics_13,x:-25.5,y:455}).wait(1).to({graphics:mask_1_graphics_14,x:-2.7,y:454.6}).wait(1).to({graphics:mask_1_graphics_15,x:20,y:454.2}).wait(1).to({graphics:mask_1_graphics_16,x:42.7,y:453.8}).wait(1).to({graphics:mask_1_graphics_17,x:65.4,y:453.4}).wait(1).to({graphics:mask_1_graphics_18,x:88.2,y:453}).wait(1).to({graphics:mask_1_graphics_19,x:110.9,y:452.5}).wait(1).to({graphics:mask_1_graphics_20,x:133.6,y:452.1}).wait(1).to({graphics:mask_1_graphics_21,x:156.3,y:451.7}).wait(1).to({graphics:mask_1_graphics_22,x:179,y:451.3}).wait(1).to({graphics:mask_1_graphics_23,x:201.8,y:450.9}).wait(1).to({graphics:mask_1_graphics_24,x:224.5,y:450.5}).wait(1).to({graphics:mask_1_graphics_25,x:247.2,y:450.1}).wait(1).to({graphics:mask_1_graphics_26,x:269.9,y:449.6}).wait(1).to({graphics:mask_1_graphics_27,x:292.7,y:449.2}).wait(1).to({graphics:mask_1_graphics_28,x:315.4,y:448.8}).wait(1).to({graphics:mask_1_graphics_29,x:338.1,y:448.4}).wait(1).to({graphics:mask_1_graphics_30,x:360.8,y:448}).wait(1).to({graphics:mask_1_graphics_31,x:383.5,y:447.6}).wait(1).to({graphics:mask_1_graphics_32,x:406.3,y:447.2}).wait(1).to({graphics:mask_1_graphics_33,x:429,y:446.7}).wait(1).to({graphics:mask_1_graphics_34,x:451.7,y:446.3}).wait(1).to({graphics:mask_1_graphics_35,x:474.4,y:445.9}).wait(1).to({graphics:mask_1_graphics_36,x:497.2,y:445.5}).wait(13));

	// naranja
	this.instance_1 = new lib.zona_amarillo();
	this.instance_1.setTransform(503.4,519.6,1,1,0,0,0,503.5,172.6);
	this.instance_1.shadow = new cjs.Shadow("rgba(102,102,102,1)",0,0,14);
	this.instance_1._off = true;

	this.instance_1.mask = mask_1;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(12).to({_off:false},0).wait(37));

	// mascaraAzul (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_0 = new cjs.Graphics().p("EgDBAl5MAAAhLxIGDAAMAAABLxg");
	var mask_2_graphics_1 = new cjs.Graphics().p("EgHsAl5MAAAhLxIPZAAMAAABLxg");
	var mask_2_graphics_2 = new cjs.Graphics().p("EgMWAl5MAAAhLxIYtAAMAAABLxg");
	var mask_2_graphics_3 = new cjs.Graphics().p("EgRBAl5MAAAhLxMAiDAAAMAAABLxg");
	var mask_2_graphics_4 = new cjs.Graphics().p("EgVsAl4MAAAhLvMArZAAAMAAABLvg");
	var mask_2_graphics_5 = new cjs.Graphics().p("EgaXAl5MAAAhLxMA0vAAAMAAABLxg");
	var mask_2_graphics_6 = new cjs.Graphics().p("EgfBAl5MAAAhLxMA+DAAAMAAABLxg");
	var mask_2_graphics_7 = new cjs.Graphics().p("EgjsAl4MAAAhLvMBHZAAAMAAABLvg");
	var mask_2_graphics_8 = new cjs.Graphics().p("EgoXAl5MAAAhLxMBQvAAAMAAABLxg");
	var mask_2_graphics_9 = new cjs.Graphics().p("EgtCAl5MAAAhLxMBaFAAAMAAABLxg");
	var mask_2_graphics_10 = new cjs.Graphics().p("EgxsAl4MAAAhLvMBjZAAAMAAABLvg");
	var mask_2_graphics_11 = new cjs.Graphics().p("Eg2XAl5MAAAhLxMBsvAAAMAAABLxg");
	var mask_2_graphics_12 = new cjs.Graphics().p("Eg7CAl5MAAAhLxMB2FAAAMAAABLxg");
	var mask_2_graphics_13 = new cjs.Graphics().p("Eg/tAl5MAAAhLxMB/bAAAMAAABLxg");
	var mask_2_graphics_14 = new cjs.Graphics().p("EhEXAl5MAAAhLxMCIvAAAMAAABLxg");
	var mask_2_graphics_15 = new cjs.Graphics().p("EhJCAl5MAAAhLxMCSFAAAMAAABLxg");
	var mask_2_graphics_16 = new cjs.Graphics().p("EhNtAl5MAAAhLxMCbbAAAMAAABLxg");
	var mask_2_graphics_17 = new cjs.Graphics().p("EhSYAl5MAAAhLxMCkxAAAMAAABLxg");
	var mask_2_graphics_18 = new cjs.Graphics().p("EhXCAl5MAAAhLxMCuFAAAMAAABLxg");
	var mask_2_graphics_19 = new cjs.Graphics().p("EhbtAl5MAAAhLxMC3bAAAMAAABLxg");
	var mask_2_graphics_20 = new cjs.Graphics().p("EhgYAl5MAAAhLxMDAxAAAMAAABLxg");
	var mask_2_graphics_21 = new cjs.Graphics().p("EhlDAl5MAAAhLxMDKHAAAMAAABLxg");
	var mask_2_graphics_22 = new cjs.Graphics().p("EhptAl5MAAAhLxMDTbAAAMAAABLxg");
	var mask_2_graphics_23 = new cjs.Graphics().p("EhuYAl5MAAAhLxMDcxAAAMAAABLxg");
	var mask_2_graphics_24 = new cjs.Graphics().p("EhzDAl4MAAAhLvMDmHAAAMAAABLvg");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:mask_2_graphics_0,x:-48.2,y:455.5}).wait(1).to({graphics:mask_2_graphics_1,x:-25.5,y:455}).wait(1).to({graphics:mask_2_graphics_2,x:-2.7,y:454.6}).wait(1).to({graphics:mask_2_graphics_3,x:20,y:454.2}).wait(1).to({graphics:mask_2_graphics_4,x:42.7,y:453.8}).wait(1).to({graphics:mask_2_graphics_5,x:65.4,y:453.4}).wait(1).to({graphics:mask_2_graphics_6,x:88.2,y:453}).wait(1).to({graphics:mask_2_graphics_7,x:110.9,y:452.5}).wait(1).to({graphics:mask_2_graphics_8,x:133.6,y:452.1}).wait(1).to({graphics:mask_2_graphics_9,x:156.3,y:451.7}).wait(1).to({graphics:mask_2_graphics_10,x:179,y:451.3}).wait(1).to({graphics:mask_2_graphics_11,x:201.8,y:450.9}).wait(1).to({graphics:mask_2_graphics_12,x:224.5,y:450.5}).wait(1).to({graphics:mask_2_graphics_13,x:247.2,y:450.1}).wait(1).to({graphics:mask_2_graphics_14,x:269.9,y:449.6}).wait(1).to({graphics:mask_2_graphics_15,x:292.7,y:449.2}).wait(1).to({graphics:mask_2_graphics_16,x:315.4,y:448.8}).wait(1).to({graphics:mask_2_graphics_17,x:338.1,y:448.4}).wait(1).to({graphics:mask_2_graphics_18,x:360.8,y:448}).wait(1).to({graphics:mask_2_graphics_19,x:383.5,y:447.6}).wait(1).to({graphics:mask_2_graphics_20,x:406.3,y:447.2}).wait(1).to({graphics:mask_2_graphics_21,x:429,y:446.7}).wait(1).to({graphics:mask_2_graphics_22,x:451.7,y:446.3}).wait(1).to({graphics:mask_2_graphics_23,x:474.4,y:445.9}).wait(1).to({graphics:mask_2_graphics_24,x:497.2,y:445.5}).wait(25));

	// azul
	this.instance_2 = new lib.zona_azul();
	this.instance_2.setTransform(512.4,501.6,1,1,0,0,0,512.6,153.8);
	this.instance_2.shadow = new cjs.Shadow("rgba(102,102,102,1)",0,0,12);

	this.instance_2.mask = mask_2;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(49));

	// Fondo
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#F8FFFF","#F7F7F7"],[0,0.259],0,-437.7,0,437.7).s().p("EhUeBCAMAAAiD/MCo9AAAMAAACD/g");
	this.shape.setTransform(520.2,422.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(49));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(491.9,344,1081.6,845);


// symbols:
(lib.zona_verde = function() {
	this.initialize();

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#87B72E").s().p("A2BatIclykQA3hBhgglI9QuaQgngmBIgcIctqSQBNgaBVAZIJ2CXQBTALAqgXIHBjKIu4ixIKNjqQAVgJAiAEMAgxAE8QA4AEA0gzIAAAgQgVAkhqgDMgg1gE6IpsDVIN7CdQAtAMgYAaInWDSQhFAfhWgWIqbigQgogJgiAOI8RKKQhFAZApAdIdHOEQBaAngOBMQgRAjgzAbI61R3gEg54AasISYpEQCFgxBVBAIIjIzIiHAAInpoAQgUgXgXgFQgtgLgzAQIwjIZg");
	this.shape.setTransform(370.5,171);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,741,342);


(lib.zona_azul = function() {
	this.initialize();

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0273C1").s().p("ACpWMIlqkuQgQheB7hEIAFgDMA0+gbeQAzgbgzgRI3wlJQg4gSgxAMIvyFFQg4ARAbAOILoDwQAyAbg8AnQ1QIw1aIjQh/AwhMgwImamYQgng7hfAiMgvTAP3IAAguMAvrgPyQBUgcBCAsIGYGRQAxA0BIgSQV1okU9ofQAsgagsgSIrdjxQgtgYA9gbQICigIVivQAxgNBAANIYWFSQA3AZgmAfMg1KAb6QhjA1AdA+IGfFMQBpBaCIhEMA7ZgljQAWgdgwgGI04j0QgfgEANgQIK5kRQAvgSA5ALIQ5CGQBMAEAWgPIC0h2IAAAcIiRBcQgkAfhcgJIxGiHQgmgKgiANIqkEMQgJAEAGAFIVLDxQBHAdhNAqUgtPAdWgLkAHGQh2BNhEAfQgqAVgqAFIgfABQiWAAhmh2g");
	this.shape.setTransform(512.7,153.9);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,1025.4,307.8);


(lib.zona_amarillo = function() {
	this.initialize();

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F4B110").s().p("EhOpAaMMA/ogYiQBTgjBTAvIFeEIQBYBGB1g1IeBtuQAlgcglgTIuFlBQgXgjA4gXIJJjFQAwgUBIAUMAmxAKnQBmAXAugqIM9p8QAngjg7gDMghFgF1QgugNAWgRIGtiXIP+CZQBOAYAtgeIGAjJIAmAFImQDTQglAWhLgHIwSiYImKCSMAhTAFzQA7ATgaAhItWKdQhOAliNglMgmOgKjQg1gPgqALIo0DAQg4AYAlANIN9E4QA5AfguAlQ/cOvgigMQhyAahHhBIlVkFQhDgvhvAvMg+xAYjg");
	this.shape.setTransform(503.5,172.6);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,1007,345.2);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;