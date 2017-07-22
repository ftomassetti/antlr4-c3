// Generated from SandyParser.g4 by ANTLR 4.6-SNAPSHOT


import { ATN } from 'antlr4ts/atn/ATN';
import { ATNDeserializer } from 'antlr4ts/atn/ATNDeserializer';
import { FailedPredicateException } from 'antlr4ts/FailedPredicateException';
import { NotNull } from 'antlr4ts/Decorators';
import { NoViableAltException } from 'antlr4ts/NoViableAltException';
import { Override } from 'antlr4ts/Decorators';
import { Parser } from 'antlr4ts/Parser';
import { ParserRuleContext } from 'antlr4ts/ParserRuleContext';
import { ParserATNSimulator } from 'antlr4ts/atn/ParserATNSimulator';
import { ParseTreeListener } from 'antlr4ts/tree/ParseTreeListener';
import { ParseTreeVisitor } from 'antlr4ts/tree/ParseTreeVisitor';
import { RecognitionException } from 'antlr4ts/RecognitionException';
import { RuleContext } from 'antlr4ts/RuleContext';
import { RuleVersion } from 'antlr4ts/RuleVersion';
import { TerminalNode } from 'antlr4ts/tree/TerminalNode';
import { Token } from 'antlr4ts/Token';
import { TokenStream } from 'antlr4ts/TokenStream';
import { Vocabulary } from 'antlr4ts/Vocabulary';
import { VocabularyImpl } from 'antlr4ts/VocabularyImpl';

import * as Utils from 'antlr4ts/misc/Utils';


export class SandyParser extends Parser {
	public static readonly NEWLINE=1;
	public static readonly WS=2;
	public static readonly VAR=3;
	public static readonly INTLIT=4;
	public static readonly DECLIT=5;
	public static readonly PLUS=6;
	public static readonly MINUS=7;
	public static readonly ASTERISK=8;
	public static readonly DIVISION=9;
	public static readonly ASSIGN=10;
	public static readonly LPAREN=11;
	public static readonly RPAREN=12;
	public static readonly ID=13;
	public static readonly UNMATCHED=14;
	public static readonly RULE_sandyFile = 0;
	public static readonly RULE_line = 1;
	public static readonly RULE_statement = 2;
	public static readonly RULE_varDeclaration = 3;
	public static readonly RULE_assignment = 4;
	public static readonly RULE_expression = 5;
	public static readonly ruleNames: string[] = [
		"sandyFile", "line", "statement", "varDeclaration", "assignment", "expression"
	];

	private static readonly _LITERAL_NAMES: (string | undefined)[] = [
		undefined, undefined, undefined, "'var'", undefined, undefined, "'+'", 
		"'-'", "'*'", "'/'", "'='", "'('", "')'"
	];
	private static readonly _SYMBOLIC_NAMES: (string | undefined)[] = [
		undefined, "NEWLINE", "WS", "VAR", "INTLIT", "DECLIT", "PLUS", "MINUS", 
		"ASTERISK", "DIVISION", "ASSIGN", "LPAREN", "RPAREN", "ID", "UNMATCHED"
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(SandyParser._LITERAL_NAMES, SandyParser._SYMBOLIC_NAMES, []);

	@Override
	@NotNull
	public get vocabulary(): Vocabulary {
		return SandyParser.VOCABULARY;
	}

	@Override
	public get grammarFileName(): string { return "SandyParser.g4"; }

	@Override
	public get ruleNames(): string[] { return SandyParser.ruleNames; }

	@Override
	public get serializedATN(): string { return SandyParser._serializedATN; }

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(SandyParser._ATN, this);
	}
	@RuleVersion(0)
	public sandyFile(): SandyFileContext {
		let _localctx: SandyFileContext = new SandyFileContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, SandyParser.RULE_sandyFile);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 13; 
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 12;
				_localctx._line = this.line();
				_localctx._lines.push(_localctx._line);
				}
				}
				this.state = 15; 
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ( _la===SandyParser.VAR || _la===SandyParser.ID );
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public line(): LineContext {
		let _localctx: LineContext = new LineContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, SandyParser.RULE_line);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 17;
			this.statement();
			this.state = 18;
			_la = this._input.LA(1);
			if ( !(_la===SandyParser.EOF || _la===SandyParser.NEWLINE) ) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public statement(): StatementContext {
		let _localctx: StatementContext = new StatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, SandyParser.RULE_statement);
		try {
			this.state = 22;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SandyParser.VAR:
				_localctx = new VarDeclarationStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 20;
				this.varDeclaration();
				}
				break;
			case SandyParser.ID:
				_localctx = new AssignmentStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 21;
				this.assignment();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public varDeclaration(): VarDeclarationContext {
		let _localctx: VarDeclarationContext = new VarDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, SandyParser.RULE_varDeclaration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 24;
			this.match(SandyParser.VAR);
			this.state = 25;
			this.assignment();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public assignment(): AssignmentContext {
		let _localctx: AssignmentContext = new AssignmentContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, SandyParser.RULE_assignment);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 27;
			this.match(SandyParser.ID);
			this.state = 28;
			this.match(SandyParser.ASSIGN);
			this.state = 29;
			this.expression(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public expression(): ExpressionContext;
	public expression(_p: number): ExpressionContext;
	@RuleVersion(0)
	public expression(_p?: number): ExpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: ExpressionContext = new ExpressionContext(this._ctx, _parentState);
		let _prevctx: ExpressionContext = _localctx;
		let _startState: number = 10;
		this.enterRecursionRule(_localctx, 10, SandyParser.RULE_expression, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 41;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SandyParser.LPAREN:
				{
				_localctx = new ParenExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 32;
				this.match(SandyParser.LPAREN);
				this.state = 33;
				this.expression(0);
				this.state = 34;
				this.match(SandyParser.RPAREN);
				}
				break;
			case SandyParser.ID:
				{
				_localctx = new VarReferenceContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 36;
				this.match(SandyParser.ID);
				}
				break;
			case SandyParser.MINUS:
				{
				_localctx = new MinusExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 37;
				this.match(SandyParser.MINUS);
				this.state = 38;
				this.expression(3);
				}
				break;
			case SandyParser.INTLIT:
				{
				_localctx = new IntLiteralContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 39;
				this.match(SandyParser.INTLIT);
				}
				break;
			case SandyParser.DECLIT:
				{
				_localctx = new DecimalLiteralContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 40;
				this.match(SandyParser.DECLIT);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 51;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input,4,this._ctx);
			while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
				if ( _alt===1 ) {
					if ( this._parseListeners!=null ) this.triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					this.state = 49;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input,3,this._ctx) ) {
					case 1:
						{
						_localctx = new BinaryOperationContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as BinaryOperationContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, SandyParser.RULE_expression);
						this.state = 43;
						if (!(this.precpred(this._ctx, 7))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 7)");
						this.state = 44;
						(_localctx as BinaryOperationContext)._operator = this._input.LT(1);
						_la = this._input.LA(1);
						if ( !(_la===SandyParser.ASTERISK || _la===SandyParser.DIVISION) ) {
							(_localctx as BinaryOperationContext)._operator = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 45;
						(_localctx as BinaryOperationContext)._right = this.expression(8);
						}
						break;

					case 2:
						{
						_localctx = new BinaryOperationContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as BinaryOperationContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, SandyParser.RULE_expression);
						this.state = 46;
						if (!(this.precpred(this._ctx, 6))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 6)");
						this.state = 47;
						(_localctx as BinaryOperationContext)._operator = this._input.LT(1);
						_la = this._input.LA(1);
						if ( !(_la===SandyParser.PLUS || _la===SandyParser.MINUS) ) {
							(_localctx as BinaryOperationContext)._operator = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 48;
						(_localctx as BinaryOperationContext)._right = this.expression(7);
						}
						break;
					}
					} 
				}
				this.state = 53;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,4,this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	public sempred(_localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 5:
			return this.expression_sempred(_localctx as ExpressionContext, predIndex);
		}
		return true;
	}
	private expression_sempred(_localctx: ExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 7);

		case 1:
			return this.precpred(this._ctx, 6);
		}
		return true;
	}

	public static readonly _serializedATN: string =
		"\x03\uAF6F\u8320\u479D\uB75C\u4880\u1605\u191C\uAB37\x03\x109\x04\x02"+
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07"+
		"\t\x07\x03\x02\x06\x02\x10\n\x02\r\x02\x0E\x02\x11\x03\x03\x03\x03\x03"+
		"\x03\x03\x04\x03\x04\x05\x04\x19\n\x04\x03\x05\x03\x05\x03\x05\x03\x06"+
		"\x03\x06\x03\x06\x03\x06\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07"+
		"\x03\x07\x03\x07\x03\x07\x03\x07\x05\x07,\n\x07\x03\x07\x03\x07\x03\x07"+
		"\x03\x07\x03\x07\x03\x07\x07\x074\n\x07\f\x07\x0E\x077\v\x07\x03\x07\x02"+
		"\x02\x03\f\b\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x02\x05\x03\x03"+
		"\x03\x03\x03\x02\n\v\x03\x02\b\t:\x02\x0F\x03\x02\x02\x02\x04\x13\x03"+
		"\x02\x02\x02\x06\x18\x03\x02\x02\x02\b\x1A\x03\x02\x02\x02\n\x1D\x03\x02"+
		"\x02\x02\f+\x03\x02\x02\x02\x0E\x10\x05\x04\x03\x02\x0F\x0E\x03\x02\x02"+
		"\x02\x10\x11\x03\x02\x02\x02\x11\x0F\x03\x02\x02\x02\x11\x12\x03\x02\x02"+
		"\x02\x12\x03\x03\x02\x02\x02\x13\x14\x05\x06\x04\x02\x14\x15\t\x02\x02"+
		"\x02\x15\x05\x03\x02\x02\x02\x16\x19\x05\b\x05\x02\x17\x19\x05\n\x06\x02"+
		"\x18\x16\x03\x02\x02\x02\x18\x17\x03\x02\x02\x02\x19\x07\x03\x02\x02\x02"+
		"\x1A\x1B\x07\x05\x02\x02\x1B\x1C\x05\n\x06\x02\x1C\t\x03\x02\x02\x02\x1D"+
		"\x1E\x07\x0F\x02\x02\x1E\x1F\x07\f\x02\x02\x1F \x05\f\x07\x02 \v\x03\x02"+
		"\x02\x02!\"\b\x07\x01\x02\"#\x07\r\x02\x02#$\x05\f\x07\x02$%\x07\x0E\x02"+
		"\x02%,\x03\x02\x02\x02&,\x07\x0F\x02\x02\'(\x07\t\x02\x02(,\x05\f\x07"+
		"\x05),\x07\x06\x02\x02*,\x07\x07\x02\x02+!\x03\x02\x02\x02+&\x03\x02\x02"+
		"\x02+\'\x03\x02\x02\x02+)\x03\x02\x02\x02+*\x03\x02\x02\x02,5\x03\x02"+
		"\x02\x02-.\f\t\x02\x02./\t\x03\x02\x02/4\x05\f\x07\n01\f\b\x02\x0212\t"+
		"\x04\x02\x0224\x05\f\x07\t3-\x03\x02\x02\x0230\x03\x02\x02\x0247\x03\x02"+
		"\x02\x0253\x03\x02\x02\x0256\x03\x02\x02\x026\r\x03\x02\x02\x0275\x03"+
		"\x02\x02\x02\x07\x11\x18+35";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!SandyParser.__ATN) {
			SandyParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(SandyParser._serializedATN));
		}

		return SandyParser.__ATN;
	}

}

export class SandyFileContext extends ParserRuleContext {
	public _line: LineContext;
	public _lines: LineContext[] = [];
	public line(): LineContext[];
	public line(i: number): LineContext;
	public line(i?: number): LineContext | LineContext[] {
		if (i === undefined) {
			return this.getRuleContexts(LineContext);
		} else {
			return this.getRuleContext(i, LineContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SandyParser.RULE_sandyFile; }
}


export class LineContext extends ParserRuleContext {
	public statement(): StatementContext {
		return this.getRuleContext(0, StatementContext);
	}
	public NEWLINE(): TerminalNode | undefined { return this.tryGetToken(SandyParser.NEWLINE, 0); }
	public EOF(): TerminalNode | undefined { return this.tryGetToken(SandyParser.EOF, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SandyParser.RULE_line; }
}


export class StatementContext extends ParserRuleContext {
	constructor();
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent?: ParserRuleContext, invokingState?: number) {
		if (parent !== undefined && invokingState !== undefined) {
			super(parent, invokingState);
		} else {
			super();
		}
	}
	@Override public get ruleIndex(): number { return SandyParser.RULE_statement; }
 
	public copyFrom(ctx: StatementContext): void {
		super.copyFrom(ctx);
	}
}
export class AssignmentStatementContext extends StatementContext {
	public assignment(): AssignmentContext {
		return this.getRuleContext(0, AssignmentContext);
	}
	constructor(ctx: StatementContext) { super(); this.copyFrom(ctx); }
}
export class VarDeclarationStatementContext extends StatementContext {
	public varDeclaration(): VarDeclarationContext {
		return this.getRuleContext(0, VarDeclarationContext);
	}
	constructor(ctx: StatementContext) { super(); this.copyFrom(ctx); }
}


export class VarDeclarationContext extends ParserRuleContext {
	public VAR(): TerminalNode { return this.getToken(SandyParser.VAR, 0); }
	public assignment(): AssignmentContext {
		return this.getRuleContext(0, AssignmentContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SandyParser.RULE_varDeclaration; }
}


export class AssignmentContext extends ParserRuleContext {
	public ID(): TerminalNode { return this.getToken(SandyParser.ID, 0); }
	public ASSIGN(): TerminalNode { return this.getToken(SandyParser.ASSIGN, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SandyParser.RULE_assignment; }
}


export class ExpressionContext extends ParserRuleContext {
	constructor();
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent?: ParserRuleContext, invokingState?: number) {
		if (parent !== undefined && invokingState !== undefined) {
			super(parent, invokingState);
		} else {
			super();
		}
	}
	@Override public get ruleIndex(): number { return SandyParser.RULE_expression; }
 
	public copyFrom(ctx: ExpressionContext): void {
		super.copyFrom(ctx);
	}
}
export class DecimalLiteralContext extends ExpressionContext {
	public DECLIT(): TerminalNode { return this.getToken(SandyParser.DECLIT, 0); }
	constructor(ctx: ExpressionContext) { super(); this.copyFrom(ctx); }
}
export class MinusExpressionContext extends ExpressionContext {
	public MINUS(): TerminalNode { return this.getToken(SandyParser.MINUS, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(ctx: ExpressionContext) { super(); this.copyFrom(ctx); }
}
export class IntLiteralContext extends ExpressionContext {
	public INTLIT(): TerminalNode { return this.getToken(SandyParser.INTLIT, 0); }
	constructor(ctx: ExpressionContext) { super(); this.copyFrom(ctx); }
}
export class BinaryOperationContext extends ExpressionContext {
	public _left: ExpressionContext;
	public _operator: Token;
	public _right: ExpressionContext;
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public DIVISION(): TerminalNode | undefined { return this.tryGetToken(SandyParser.DIVISION, 0); }
	public ASTERISK(): TerminalNode | undefined { return this.tryGetToken(SandyParser.ASTERISK, 0); }
	public PLUS(): TerminalNode | undefined { return this.tryGetToken(SandyParser.PLUS, 0); }
	public MINUS(): TerminalNode | undefined { return this.tryGetToken(SandyParser.MINUS, 0); }
	constructor(ctx: ExpressionContext) { super(); this.copyFrom(ctx); }
}
export class ParenExpressionContext extends ExpressionContext {
	public LPAREN(): TerminalNode { return this.getToken(SandyParser.LPAREN, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public RPAREN(): TerminalNode { return this.getToken(SandyParser.RPAREN, 0); }
	constructor(ctx: ExpressionContext) { super(); this.copyFrom(ctx); }
}
export class VarReferenceContext extends ExpressionContext {
	public ID(): TerminalNode { return this.getToken(SandyParser.ID, 0); }
	constructor(ctx: ExpressionContext) { super(); this.copyFrom(ctx); }
}


