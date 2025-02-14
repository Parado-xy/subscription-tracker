import mongoose from "mongoose";

const subscriptionSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Subscription name required"],
      trim: true,
      minLength: 2,
      maxLength: 100,
    },

    price: {
      type: Number,
      required: [true, "Subscription price required"],
      min: [0, "Price must be greater than 0"],
    },

    currency: {
      type: String,
      enum: ["USD", "EUR", "GBP", "NGN"],
      default: "USD",
    },

    frequency: {
      type: String,
      enum: ["daily", "weekly", "monthly", "yearly"],
    },

    category: {
      type: String,
      enum: [
        "food",
        "utilities",
        "transport",
        "politics",
        "sports",
        "health",
        "miscellaneous",
      ],
      required: [true, "Category required"],
    },

    paymentMethod: {
      type: String,
      enum: ["credit card", "debit card", "bank transfer", "cash"],
      required: [true, "Payment method required"],
    },

    status: {
      type: String,
      enum: ["active", "cancelled", "expired"],
      default: "active",
    },

    startDate: {
      type: Date,
      required: [true, "Start date required"],
      validate: {
        validator: (date) => {
          return date <= new Date();
        },
        message: "Start date cannot be in the future",
      },
    },

    renewalDate: {
      type: Date,
      required: [true, "Start date required"],
      validate: {
        validator: function (date) {
          return date >= this.startDate;
        },
        message: "Renewal date cannot be in the past",
      },
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      index: true,
    },
  },
  { timestamps: true }
);

// Auto-Calculate renewal date if missing;
subscriptionSchema.pre("save", function (next) {
  if (!this.renewalDate) {
    this.renewalDate = new Date(this.startDate);
    const renewalPeriods = {
      daily: 1,
      weekly: 7,
      monthly: 30,
      yearly: 365,
    };
    const period = renewalPeriods[this.frequency];
    this.renewalDate.setDate(this.renewalDate.getDate() + period);

    // Auto update the status if the renewal date has passed
    if (this.renewalDate < new Date()){
        this.status = "expired";
    }

    next();
  }

});

const Subscription = mongoose.model("Subscription", subscriptionSchema);

export default Subscription;
